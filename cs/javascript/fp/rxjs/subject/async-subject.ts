import { AsyncSubject, Observer, Observable } from 'rxjs';

let observerA: Observer<number> = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
};

let observerB: Observer<number> = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
};

// ReplaySubject
// 1. 等到结束后会送出最后一个值, 其他时候没反应

let asyncSubject: AsyncSubject<number> = new AsyncSubject(); // 发送倒数两个值

asyncSubject.subscribe(observerA);

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.complete();



asyncSubject.subscribe(observerB);