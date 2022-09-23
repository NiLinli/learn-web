import { Observable, interval, of } from 'rxjs';
import { take, skip, skipUntil, delay } from 'rxjs/operators';

let observable: Observable<number> = interval(100);

observable.pipe(
    take(6),
    skipUntil(of(1, 2, 3, 4).pipe(delay(400)))
).subscribe({
    next: value => console.log(`${value}`),
    complete: () => console.log('complete!!!')
});


