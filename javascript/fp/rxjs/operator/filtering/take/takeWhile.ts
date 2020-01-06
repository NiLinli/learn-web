import { Observable, interval } from 'rxjs';
import { takeUntil, delay, takeWhile } from 'rxjs/operators';

let observable: Observable<number> = interval(100);


// takeUtil 中观察一个 函数返回值 
// 1. take 满足条件的项目
// 2. 返回值为 false 时候, 当前 observable 就 take 完了

observable.pipe(
    takeWhile(x => x < 10)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete!!!')
})