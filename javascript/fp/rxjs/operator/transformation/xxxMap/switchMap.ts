import { interval, from, of } from 'rxjs';
import { switchAll, delay, mapTo, switchMap, map } from 'rxjs/operators';

// map(返回 Observable) + switchAll

// interval(1000).pipe(
//     mapTo(interval(100)),
//     switchAll()
// ).subscribe((value) => {
//     console.log(value);
// });


interval(1000).pipe(
    switchMap(() => interval(100))
).subscribe((value) => {
    console.log(value);
});


// 强调只需要最后一次数据