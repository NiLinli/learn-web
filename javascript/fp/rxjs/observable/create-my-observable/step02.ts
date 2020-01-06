import { Observer } from './model';

function simpleObservable(observer: Observer<number>) {
    let i = 0;
    const id = setInterval(() => {
        if (i < 10) {
            observer.next(i);
            i++;
        } else {
            clearInterval(id);
            observer.complete();
        }
    }, 10);
}

let observer: Observer<number> = {
    next: value => console.log(`next ->  ${value}`),
    error: () => { },
    complete: () => console.log('complete')
};

simpleObservable(observer);