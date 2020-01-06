import { Observable, interval, range, of } from 'rxjs';
import { concat, take, startWith, delay } from 'rxjs/operators';

let observable1: Observable<any> = interval(100).pipe(
    take(6),
    delay(5000)
);

observable1.pipe(
    startWith('omg start status')
).subscribe((value: any) => console.log(value));


// 1. 添加一个开始要发送的元素
// 2. 同步的
// 3. 常用来保存起始状态