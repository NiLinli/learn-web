import { Observable, Subscription } from 'rxjs';

let observable = Observable.create(observer => {
    try {
        observer.next(1);
        console.log('hello');
        observer.next(2);
        observer.next(3);
        observer.complete();
        observer.next(4);
    } catch (err) {
        observer.error(err);
    }
});

console.log('subscribe begin');

let subcription: Subscription = observable.subscribe(value => {
    console.log(value + '  123');
});


let subcription2 = observable.subscribe(value => {
    console.log(value);
});