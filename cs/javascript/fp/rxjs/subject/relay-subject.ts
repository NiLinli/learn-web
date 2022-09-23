import { ReplaySubject, Observer, Observable } from 'rxjs';

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
// 1. 只要有加入 observer list 就发送指定的前面发送的值
// 2. RelaySubject(1) 与 BehaviorSubject 不同点： 后者有起始状态

let relaySubject: ReplaySubject<number> = new ReplaySubject(2); // 发送倒数两个值

relaySubject.subscribe(observerA);

relaySubject.next(1);
relaySubject.next(2);
relaySubject.next(3);



relaySubject.subscribe(observerB);