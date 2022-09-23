import { interval, of } from 'rxjs';
import { take, map, mapTo, mergeAll, mergeMap } from 'rxjs/operators';

const ob1$ = of(1, 2, 3, 5, 5);

// map(返回Observable) + mergeAll
// ob1$.pipe(
//     mapTo(interval(100).pipe(take(3))),            // v1 (外部 observable 发送时间)
//     mergeAll()
// ).subscribe((v) => {
//     console.log(v);                                // v2 (內部的 observable 结束时间)  
// });


ob1$.pipe(
    mergeMap((v) => interval(100).pipe(take(3)))
).subscribe((v) => {
    console.log(v);
})


// 同时处理














// 将每个值映射成 Observable ，然后使用 mergeAll 打平所有的内部 Observables 