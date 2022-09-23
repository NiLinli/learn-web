import { Observable, interval } from 'rxjs';
import { takeUntil, delay } from 'rxjs/operators';

let observable: Observable<number> = interval(100);

let observable2: Observable<any> = interval(2000);

// takeUtil 中观察一个 Observable 
// 发送值的时候， 当前 observable 就 complete

observable.pipe(
    takeUntil(observable2)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete!!!')
})