import { of, empty, throwError } from 'rxjs';
import { map, catchError, retry, retryWhen, delay } from 'rxjs/operators'
import { observerTest } from '../common';

const ob = of('a', 'b', 'c', 'd', 1, 2, 3, 4);

// catchError 接受到错误
//  程序本身的错误
//  throw 抛出的错误
// 订阅之前在管道中处理 error, 返回一个 Observable
//  订阅函数会从错误的点断开, 继续订阅这个新的 Observable
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    })
).subscribe(observerTest);

console.log('-------------------------------------');

// 返回一个新的 Observable
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    }),
    catchError((error) => {
        return of('e', 'f', 'g')
    })
).subscribe(observerTest);

console.log('-------------------------------------');

// 遇到错误直接结束 empty
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    }),
    catchError((error) => {
        return empty();
    })
).subscribe(observerTest);

console.log('-------------------------------------');
// 对错误进行整理, 重新抛出一个 throwError
ob.pipe(
    map((value: any) => {
        return value.toUpperCase();
    }),
    catchError((error) => {
        return throwError('Whoops!!');
    })
).subscribe(observerTest);
