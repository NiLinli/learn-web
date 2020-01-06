import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

let observable: Observable<number> = of(1, 6, 8, 9, 0);

observable.pipe(
    filter(v => v % 2 === 0)                        // 返回值 true 发射 false 过滤掉
).subscribe(value => console.log(value));