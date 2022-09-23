import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

let observable: Observable<number> = of(1, 6, 8, 9, 0);

observable.pipe(
    map(v => v + 5) // 将原 Observable 的发射出来的值, 都会被运算, 然后返回值为新的 Observable 的发射值
).subscribe(value => console.log(value));