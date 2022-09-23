import { Observable, interval, range, of, concat } from 'rxjs';
import { take } from 'rxjs/operators';

let observable1: Observable<number> = interval(100).pipe(take(3)),
    observable2: Observable<number> = range(9, 4),
    observable3: Observable<string> = of('ni', 'xi', 'xi'),
    observable4: Observable<string> = of('shi', 'shuai', 'ge');


concat(observable1, observable2, observable3, observable4).subscribe(
    value => console.log(value)
);

// 0--1--2 |
//           (9 10 11 12) |
//                          (ni xi xi) |
//                                       (shi shuai ge) |
// 
// 0--1--2  (9 10 11 12) (ni xi xi)  (shi shuai ge)|

// 1. 顺序的链接多个 Observable 
// 2. 上一个执行完了, 再执行下一个