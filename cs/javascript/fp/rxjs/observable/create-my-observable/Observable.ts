import { Observer, SafeObserver } from './model';

export class Observable<T> {

    source?: Observable<T>;
    operator?: any;
    map?: any;

    constructor(
        public _subscribe: (observer: SafeObserver<T>) => Function | any
    ) { }

    // 传递 observer
    subscribe(observer: Observer<T>) {
        // 1. 包装 observer 成为 safeObserver
        const safeObserver = new SafeObserver(observer);
        // 2. 执行 函数体, 并返回 _unsubscribe 方法
       
        // operator 生成的 Observable 的订阅
        if (this.operator) {
            // 通过 operator 创建的新的 Observable 执行的函数 , 新的 Observable 的作用是
            // 1. 保存最原始的 Observable 
            // 2. 包装 observer
            // 3. 执行最原始 Observable 和 包装后的 observer 之家的订阅
            this.operator.call(safeObserver, this.source);
        } else {
             // 2.1 将返回的 _unsubscribe 方法, 复制给 safeObserver 
            safeObserver._unsubscribe = this._subscribe(safeObserver);   // safeObserver 上 complete 和 error 需要调用 unsubscribe 方法
        }

        return () => {
            // 3. 返回的是经过 safeObserver 包装的 unsubscribe() -> 确保 _unsubscribe 失效的情况下, 执行空代码, 不发设值
            safeObserver.unsubscribe();
        };
    }

    static create(subscribe: (observer: Observer<any>) => any): Observable<any> {
        return new Observable(subscribe);
    }

}