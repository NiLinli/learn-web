import { Observable, Subscription, Observer } from 'rxjs';

// 当我们使用 create() 方法创建 Observable 时，Observable 必须定义如何清理执行的资源。
// 你可以通过在 function subscribe() 中返回一个自定义的 unsubscribe 函数

let observable = Observable.create(function subscribe(observer: Observer<string>): Function {

    let intervalId = setInterval(() => {
        observer.next('a');
    }, 1000);

    // 返回一个function 
    return function unsubscribe() {
        clearInterval(intervalId);
    };
});


let subscription: Subscription = observable.subscribe((res)=>{console.log(res)});

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);