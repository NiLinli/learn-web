import { Observable, interval, merge } from 'rxjs';
import { take } from 'rxjs/operators';

merge(
    interval(100).pipe(take(2)),
    interval(255).pipe(take(3)),
    interval(270).pipe(take(4))
).subscribe(value => console.log(value));


// 1. 同时 发送值
// 2. 都结束了才算结束
