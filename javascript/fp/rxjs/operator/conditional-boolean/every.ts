import { interval } from 'rxjs';
import { every, take } from 'rxjs/operators';

// 等待所有 Observable 完成后
// true
// false

interval(1000).pipe(
    take(20),
    every(x => x < 10)
).subscribe(
    (value) => console.log(value),
    error => error,
    () => console.log('complete!!!')
);

