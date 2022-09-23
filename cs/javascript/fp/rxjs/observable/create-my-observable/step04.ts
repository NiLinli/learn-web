import { Observer } from './model';
import { Observable } from './Observable';

const simpleObservable = Observable.create((observer: Observer<number>) => {
    let i = 0;
    const id = setInterval(() => {
        if (i < 10) {
            observer.next(i);
            i++;
        } else {
            observer.complete();
            clearInterval(id);
        }
    }, 10);

    return () => {
        console.log('unsubscribe');
        // clearInterval(id);
    };
});


let observer: Observer<number> = {
    next: value => console.log(`next ->  ${value}`),
    error: () => { },
    complete: () => console.log('complete')
};

let unsub = simpleObservable.subscribe(observer);

setTimeout(unsub, 50);