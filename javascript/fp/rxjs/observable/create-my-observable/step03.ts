import { Observer } from './model';

export function simpleObservable(observer: Observer<number>) {
    let i = 0;
    const id = setInterval(() => {
        if (i < 10) {
            observer.next(i);
            i++;
        } else {
            clearInterval(id);
            observer.complete();
        }
    }, 100);

    return () => {
        console.log('unsubscribe');
        clearInterval(id);
    };
}



let observer: Observer<number> = {
    next: value => console.log(`next ->  ${value}`),
    error: () => { },
    complete: () => console.log('complete')
};

let unsub = simpleObservable(observer);
setTimeout(() => {
    unsub();
}, 50);


// 1. 异步可以返回取消订阅函数/对象
// 2. 同步直接执行了, 不能取消