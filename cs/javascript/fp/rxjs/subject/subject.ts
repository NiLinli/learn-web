// Observable:
// 1. 可以被多次订阅
// 2. 每次订阅都是独立的, 从新开始的

// 第二次订阅 source 不要从新开始, 而是从之前一次订阅的当前元素为起点开始发送

// 1. 建立一个中间人订阅 source (中间人充当 observer)
// 2. 中间人转发出去 (中间人充当 Observable)
import { interval, Observable, Observer, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

const source: Observable<number> = interval(1000).pipe(take(3));

let observerA: Observer<number> = {
    next: (value: number) => console.log('A next: ' + value),
    error: (error: any) => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

let observerB: Observer<number> = {
    next: (value: number) => console.log('B next: ' + value),
    error: (error: any) => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

let subject = {
    observers: [],
    // addObserver: function (observer: Observer<any>) {
    //     this.observers.push(observer);
    // },
    // 改名字
    subscribe: function (observer: Observer<any>) {
        this.observers.push(observer);
    },
    next: function (value: any) {
        this.observers.forEach((o: Observer<any>) => o.next(value))
    },
    error: function (error: any) {
        this.observers.forEach((o: Observer<any>) => o.error(error))
    },
    complete: function () {
        this.observers.forEach((o: Observer<any>) => o.complete())
    }

}

// subject.addObserver(observerA);
subject.subscribe(observerA);

// source.subscribe(subject);

setTimeout(() => {
    // subject.addObserver(observerB);
    subject.subscribe(observerB);
}, 1000);



// Subject
let realSubject: Subject<number> = new Subject(); // 中间人

realSubject.subscribe(observerA);
source.subscribe(realSubject);

setTimeout(() => {
    realSubject.subscribe(observerB);
}, 1000);

// 中间人 Subject
// Subject 是 Observable 又是 Observer
// Subject 会对内部的 observers 列表进行多播(multicast)

