import { Observable, interval } from 'rxjs';
import { take, first, skip } from 'rxjs/operators';

let observable: Observable<number> = interval(1000);

observable.pipe(
    take(6),
    skip(3)
).subscribe({
    next: value => console.log(`${value}`),
    complete: () => console.log('complete!!!')
});

// 1. skip(n) 忽略前面 n 个 
// 2. 代码还是执行了 , 所以等待时间还是有
