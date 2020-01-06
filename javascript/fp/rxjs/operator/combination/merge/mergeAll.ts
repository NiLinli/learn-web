import { interval, merge } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';


const highOrder = interval(100).pipe(
    take(3),
    map(() => interval(Math.random() * 2000).pipe(take(3)))
);

highOrder.pipe(
    mergeAll()
).subscribe(value => console.log(value));


// 1. 订阅高阶 Observables
// 2. 高阶 Observables 发射 Observable, 接收到 Observable 之后立即发送(不用等到收集所有的 Observable) -> 可以为 动态添加的 Observable 与 merge 的操作
// 3. Observable 的处理方式和 merge 一样
