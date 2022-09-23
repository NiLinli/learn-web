import { range, interval } from "rxjs";
import { count, take } from 'rxjs/operators';


// 计算源的发送数量，并当源完成时发出该数值
// complete 后, 发送一个计数值
range(1, 20).pipe(
    count()
).subscribe(count => console.log(count));

// count() 中可以传递函数, 设置计数条件
interval(100).pipe(
    take(20),
    count((v) => v % 2 === 0)
).subscribe(count => console.log(count));


// 1--2--3--4--|
// ------------4--|