import { interval, Observable, Observer, Subject, ConnectableObservable } from 'rxjs';
import { take, multicast, refCount } from 'rxjs/operators';

const source: ConnectableObservable<number> = interval(1000).pipe(
    take(3),
    multicast(() => new Subject()), 
    refCount()  // 只要往观察列表里面添加观察者, 就会 执行 source.connect();
);





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

// 添加 observer
source.subscribe(observerA); // subject.subscribe(observerA);

// source.connect(); // source.subscribe(subject);

setTimeout(() => {
    source.subscribe(observerB);
}, 1000);


