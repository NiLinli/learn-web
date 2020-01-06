import { interval, Observable } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

let source = interval(500).pipe(take(3)),
    newest = interval(300).pipe(take(6));

let example: Observable<any> = source.pipe(
    withLatestFrom(newest)
)

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 1. 与 combineLastest 基本特点一样
// 2. 有主从关系, 主发射值的时候, 才进行计算

// 0---------1------2
//  0--1--2----3--4---5

// 00--------12----24