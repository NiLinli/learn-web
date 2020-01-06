import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { observerTest } from '../common';

// 拦截源 Observable 上的每次发送
// 并且运行一个函数(用于调试, 不会影响本来的操作)
// 但返回的输出 Observable 与 源 Observable 是相同的

interval(1000).pipe(
    tap((v) => console.log(`do ${v}`))
).subscribe(observerTest)