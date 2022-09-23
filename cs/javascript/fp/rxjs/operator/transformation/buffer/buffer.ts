import { of, interval } from 'rxjs';
import { take, buffer } from 'rxjs/operators';
import { observerTest } from '../../common';

interval(50).pipe(
    take(10),
    buffer(interval(1000))  // 观察 Observable
).subscribe(observerTest);

// 1. 观察一个 Observable
// 2. Observable 发出值的时候, 将过往的未发送的值收集到一个数组中发出