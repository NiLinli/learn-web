import { Observable } from './Observable';
import { Observer } from './model'

// 建立靜態方法 
export function fromArray(array: any[]): Observable<number> {
    if (!Array.isArray(array)) {
        throw new Error('params need to be an array');
    }
    return Observable.create(function (observer) {
        try {
            // 遍歷每個元素並送出
            array.forEach(value => observer.next(value))
            observer.complete()
        } catch (err) {
            observer.error(err)
        }
    });
}

let observable: Observable<number> = fromArray([1, 2, 3, 4, 5, 6]);

let observer: Observer<number> = {
    next: value => console.log(`next ->  ${value}`),
    error: () => { },
    complete: () => console.log('complete')
};

observable.subscribe(observer);