import { Store } from 'redux';

declare let concreteStore: Store;

// 1.  monkey patching
function patchStoreToAddLogging(store: Store) {
    const next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action)
        const result = next(action);
        console.log('next state', store.getState())
        return result;
    }
}

function patchStoreToAddCrashReporting(store: Store) {
    const next = store.dispatch;
    store.dispatch = function dispatchAndReportErrors(action) {
        try {
            return next(action)
        } catch (err) {
            console.error('捕获一个异常!', err);
            // 报告错误
            // ...
            throw err;
        }
    }
}

// 调用
patchStoreToAddLogging(concreteStore);
patchStoreToAddCrashReporting(concreteStore);



// 2.  隐藏  monkey patching
function logger_v1(store: Store) {
    const next = store.dispatch;
    // 包装一层 在 调用 dispatch 时候, 做一些其他操作
    return (action: any) => {
        console.log('dispatching', action)
        const result = next(action)
        console.log('next state', store.getState())
        return result;
    }
}

function applyMiddlewareByMonkeypatching(store: Store, middlewares: any[]) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    // 在每一个 middleware 中变换 dispatch 方法
    middlewares.forEach((middleware: any) =>
        store.dispatch = middleware(store)
    )
}

applyMiddlewareByMonkeypatching(concreteStore, [logger_v1]);

// 3. 
// 替换 dispatcher 的原因
// 1. 这样我们就可以在后面直接调用它
// 2. 就是每一个 middleware 都可以操作（或者直接调用）前一个 middleware 包装过的 store.dispatch

const logger = (store: Store) => {
    // 这里的 next 必须指向前一个 middleware 返回的函数
    return (next: any) => {
        return (action: any) => {
            console.log('dispatching', action)
            const result = next(action)
            console.log('next state', store.getState());
            return result;
        }
    }
};

const crashReporter = (store: Store) => (next: any) => (action: any) => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err)
        throw err;
    }
}

// Middleware 接收了一个 next() 的 dispatch 函数
// 并返回一个 dispatch 函数
// 返回的函数会被作为下一个 middleware 的 next()，以此类推
// 由于 store 中类似 getState() 的方法依旧非常有用，我们将 store 作为顶层的参数, 使得它可以在所有 middleware 中被使用

function applyMiddleware(store: Store, middlewares: any[]) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    let dispatch = store.dispatch;
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    );

    return Object.assign({}, store, { dispatch });
}