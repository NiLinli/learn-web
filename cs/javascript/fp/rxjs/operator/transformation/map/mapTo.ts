import { Observable, of } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';

let observable: Observable<number> = of(1, 6, 8, 9, 0);

observable.pipe(
    mapTo(1000) // 将原 Observable 的发射出来的值, 改为固定值发送出去
).subscribe(value => console.log(value));


// map 简单表示 mapTo
observable.pipe(
    map(() => 2000)
).subscribe(value => console.log(value));