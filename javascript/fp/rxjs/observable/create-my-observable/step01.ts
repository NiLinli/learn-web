// 可观察对象simpleObservable
// 接受 observer (观察者) 对象的函数
import { Observer } from './model';

function simpleObservable(observer: Observer<number>) {
    for (let i = 0; i < 10; i++) {
        observer.next(i);
    }
    observer.complete();
}

// 观察者对象（可选回调函数）
const observer: Observer<number> = {
    next: value => console.log(`next -> ${value}`),  // 发出值的回调
    error: () => { }, // 错误的回调
    complete: () => { } // 完成的回调
};

simpleObservable(observer);