import { Observable } from './Observable';
import { Observer, SafeObserver } from './model';
import { fromArray } from './step05';


// 1. 返回一个新的 Observable 
// 2. 大部分 operator 就是在包裹 observer , 执行 next 方法前 将要发射的值 先做一次 逻辑运算
// 3. 订阅 operator 返回的新的 Observable, 还是相当于执行最原始的 Observable 
Observable.prototype.map = function (callback): Observable<any> {
    const observable = new Observable();

    observable.source = this;

    observable.operator = {
        call: (observer, source) => {
            const newObserver = new MapObserver(observer, callback);
            // 建立包裹后的新的 observer
            // 讲新的 observer 订阅到最原始的 Observable 上面
            return source.subscribe(newObserver);
        }
    };

    return observable;
}

class MapObserver<T> extends SafeObserver<T>{

    callback: (value: T) => T;

    constructor(observer: Observer<T>, callback: (value: T) => T) {
        // 這裡會傳入原本的 observer 跟 map 的 callback
        super(observer);
        this.callback = callback; // 保存 callback
        this.next = this.next.bind(this); // 確保 next 的 this
    }

    next(value: T) {
        try {
            this.destination.next(this.callback(value));
            // 這裡 this.callback(value) 就是 map 的操作逻辑, 返回值发射出去
        } catch (err) {
            this.destination.error(err);
            return;
        }
    }

}

let observer: Observer<number> = {
    next: value => console.log(`next... ->  ${value}`),
    error: () => { },
    complete: () => console.log('complete')
};

const simpleObservable = Observable.create((observer: Observer<number>) => {
    let i = 0;
    const id = setInterval(() => {
        if (i < 10) {
            observer.next(i);
            i++;
        } else {
            observer.complete();
            clearInterval(id);
        }
    }, 10);

    return () => {
        console.log('unsubscribe');
        // clearInterval(id);
    };
});

simpleObservable
    .map((v: any) => v + 4)
    .subscribe(observer);