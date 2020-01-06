import { interval } from 'rxjs';
import { take, find, findIndex } from 'rxjs/operators';

// 类似于 Array.prototype.find / findIndex
// find
// findIndex 只发出源 Observable 所发出的值中第一个满足条件的值的索引
// true -> complete, 后面的值不进行发送
// false ->
//          find -> undefined
//          findIndex -> -1

const ob$ = interval(10).pipe(take(100));

ob$.pipe(
    find((value) => value === 101)
).subscribe(
    value => console.log(value),
    err => err,
    () => console.log('complete!!!')
)

ob$.pipe(
    findIndex((value) => value === 101)
).subscribe(
    value => console.log(value),
    err => err,
    () => console.log('complete!!!')
)