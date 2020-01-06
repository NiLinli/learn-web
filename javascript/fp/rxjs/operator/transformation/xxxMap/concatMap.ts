import { interval, of } from 'rxjs';
import { take, map, concat, concatAll, concatMap } from 'rxjs/operators';

const ob1$ = interval(1000).pipe(take(3));

// map(返回Observable) + concatAll 
// ob1$.pipe(
//     map((v) => interval(100).pipe(take(3))),            // v1 (外部 observable 发送时间)
//     concatAll()
// ).subscribe((v) => {
//     console.log(v);                                     // v2 (內部的 observable 结束时间)  
// });


ob1$.pipe(
    concatMap((v) => interval(100).pipe(take(3)))
).subscribe((v) => {
    console.log(v);
})

// v1 > v2 会导致内存问题
// v1 < v2 情况下使用
// 适合內部的单个 observable 结束时间 比外部 observable 发送时间快的情形
// 并且不希望有任何并行处理行为
// (少数) 一次一次完成到底的的 UI 动画
// 部分 Http 请求