import { of, empty } from 'rxjs';
import { map, catchError, retry, retryWhen, delay } from 'rxjs/operators'
import { observerTest } from '../common';

const ob = of('a', 'b', 'c', 'd', 1, 2, 3, 4);

// 无限循环
// ob.pipe(
//     map((value: any) => {
//         return value.toUpperCase();
//     }),
//     catchError((error, caught) => {
//         return caught;      // caught catch 的过去式 -> 指向当前操作的 Observable
//     })
// ).subscribe(observerTest);

// retry(n)
// 尝试 n 次 , 最后一次如果还是错误的话, 还是会返回错误信息
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    }),
    retry(3)
).subscribe(observerTest);

console.log('-------------------------------------');

// retryWhen() 等待返回的 Observable 完成之后, 再进行尝试, 一直循环到没有错误 catch 为止
// 尝试 n 次 , 最后一次如果还是错误的话, 还是会返回错误信息
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    }),
    retryWhen((errorObs) => { return errorObs.pipe(delay(2000)) })
    // 等到返回的 Observable 完成后, 重新订阅
).subscribe(observerTest);

