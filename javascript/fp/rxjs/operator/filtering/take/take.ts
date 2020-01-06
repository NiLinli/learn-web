import { Observable, interval } from 'rxjs';
import { take, first } from 'rxjs/operators';

// 接收源 Observable 最初的N个值 (N = count)，然后完成

let observable: Observable<number> = interval(1000);

observable.pipe(
    take(6)
).subscribe({
    next: value => console.log(`take(6) -> ${value}`),
    complete: () => console.log('take(6) -> complete!!!')
});

// first() === take(1)
observable.pipe(
    first()
).subscribe({
    next: value => console.log(`first -> ${value}`),
    complete: () => console.log('first -> complete!!!')
});