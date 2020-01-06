import { Observable, interval } from 'rxjs';
import { takeLast, take, last } from 'rxjs/operators';

// complete 之后(收集所有的发送数据之后, 才能确定有几个)
// 同步发送最后 n 个值

let observable: Observable<number> = interval(100).pipe(take(100));

observable.pipe(
    takeLast(4)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete!!!')
});


// last() === takeLast(1)
observable.pipe(
    last()
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete!!!')
});