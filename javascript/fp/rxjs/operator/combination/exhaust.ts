import { interval } from 'rxjs';
import { switchAll, mapTo, exhaust } from 'rxjs/operators';

interval(1000).pipe(
    mapTo(interval(100)),
    exhaust()
).subscribe((value) => {
    console.log(value);
})

// exhaust： 排出,  用尽, 耗尽
// Observable 接收源 Observable 并只专注于传播第一个 Observable 直到它完成，
// 然后订阅下一个 Observable 
// 未完成时候产生外部 Observable 就直接被抛弃了, 与 switchAll 效果相反