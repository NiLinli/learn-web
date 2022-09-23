import { Observable, interval, Subscription } from 'rxjs';


let observable: Observable<number> = interval(100);

let sub: Subscription = observable.subscribe(value => console.log(value));

setTimeout(() => {
    sub.unsubscribe();
}, 5000);

// 从 0 开始 , 隔 多长事件自增