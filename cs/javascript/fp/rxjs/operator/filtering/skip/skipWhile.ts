import { Observable, interval, of } from 'rxjs';
import { take, skip, skipUntil, delay, skipWhile } from 'rxjs/operators';

let observable: Observable<number> = interval(100);

observable.pipe(
    take(20),
    skipWhile(v => v < 6)
).subscribe({
    next: value => console.log(`${value}`),
    complete: () => console.log('complete!!!')
});


// 1. 跳过满足条件的项目
// 2. 如果有一个不满足 false 当前 observable 就 skip 完了, 不再跳过
