// 影响元素 Observable 中元素发送的时机
import { Scheduler, from, of, Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

let observable1: Observable<number> = of(1, 2, 3, 4, 5);

console.log('begin');

observable1.pipe(observeOn(asyncScheduler)).
    subscribe(value => console.log(value));
console.log('end');

let observable2: Observable<number> = from([1, 2, 3, 4, 5], asyncScheduler);

console.log('begin2');

observable2.subscribe(value => console.log(value));

console.log('end2');


