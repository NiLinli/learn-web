import { of, Observable } from 'rxjs';

const myObservable: Observable<number> = of(1, 2, 3);

// Create observer object
const myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: any) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);

// 同步传输几个值的时候