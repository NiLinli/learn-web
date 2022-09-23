import { interval, from, of } from 'rxjs';
import { switchAll, delay, mapTo } from 'rxjs/operators';

interval(1000).pipe(
    mapTo(interval(100)),
    switchAll()
).subscribe((value) => {
    console.log(value);
})

// 1. 一旦有新的内部 Observable 出现, 通过丢弃前一个
// 2. 将唯一保留的新的一个 高级 Observable flatten