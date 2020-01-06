import { interval } from 'rxjs';
import { take, combineAll, map } from 'rxjs/operators';


const highOrder = interval(100).pipe(
    take(3),
    map(() => interval(Math.random() * 2000).pipe(take(3)))
);

highOrder.pipe(
    combineAll()
).subscribe((value) => {
    console.log(value);
});


// 1. 等待所有的输出(Observable)完成后
// 2. combineLatest 所有的输出

// flatten and combineLatest Observable

