import { Observable, Subscription, Observer } from 'rxjs';

// 1. error 和 complete 以后 不接受 next 出来的值
// 2. complete 不发送值

let observable: Observable<any> = Observable.create((observer: Observer<number>) => {
    try {
        observer.next(1);
        console.log('hello111');
        observer.next(2);
        setTimeout(() => {
            observer.next(3);
            observer.complete();
        }, 1000);
        observer.next(4);
    } catch (err) {
        observer.error(err);
    }
});

console.log('subscribe begin');

let subcription: Subscription = observable.subscribe({
    next: value => {
        console.log('get value ' + value);
    },
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done') // complete 不发送值
});
