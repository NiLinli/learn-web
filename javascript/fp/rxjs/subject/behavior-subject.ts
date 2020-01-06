// 1. Subject 表示当下状态
import { Subject, Observable, Observer, BehaviorSubject, ReplaySubject } from 'rxjs';
import { } from 'rxjs/operators';

let subject: Subject<number> = new Subject();

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

subject.subscribe(observerA);

subject.next(1);

subject.next(2);

subject.next(3);


subject.subscribe(observerB); // observerB 这个时候才加入观察列表, 因为之后没有执行任何subject.next()

console.log('------behavior subject-------');

// 需求：
// 1. 加入时候, subject 表达当前状态给 observer

// BehaviorSubject 跟 Subject 最大的不同就是 BehaviorSubject 记录了当前值(状态) , 不是单纯的发射值
// 1. 状态的表达
// 2. 值的发送
// 只要加入 observer list 就会先把状态发给你

let behaviorSubject:BehaviorSubject<number> = new BehaviorSubject(0); // 0 为初始值

behaviorSubject.subscribe(observerA);

behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe(observerB);

