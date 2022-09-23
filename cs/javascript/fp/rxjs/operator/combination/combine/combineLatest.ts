import { interval, Observable, combineLatest, of } from 'rxjs';
import { take, delay } from 'rxjs/operators';

let source = interval(500).pipe(
    take(3), delay(500)),
    newest = interval(200).pipe(take(6));

// 1. 不经过 callback 返回数组
combineLatest(source, newest).subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// 2. 数组计算后返回其他值
combineLatest(source, newest, (x: number, y: number) => {
    // 将数组中的值进行计算
    console.log(`source output: ${x}`);
    console.log(`newest output: ${y}`);
    // 返回值就是 combine 结合的值, 发送给 observer
    return x + y;
}).subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//                0-------------1------2
//  0---1---2---3-----4---5

// ---------------03--04--05----15-----25



// 同步 combineLatest 有所区别
var weight = of(70, 72, 76, 79, 75);
var height = of(1.76, 1.77, 1.78);
combineLatest(weight, height, (w: number, h: number) => {
    console.log(`weight output: ${w}`);
    console.log(`height output: ${h}`);
    return w / (h * h);
}).subscribe(x => console.log('BMI is ' + x));

// (70 72 76 79 75)
//                  (1.76     1.77   1.78)  

//                  75|1.76 75|1.77 75|1.78



// 组合多个 Observables 来创建一个 Observable 该 Observable 的值上面的 return value
// 1. 至少组合的 Observable 都已经有输出(起点为最后发送值得 Observable)
// 2. 只要任意一个 Observable 输出有变化(并且), 就会发送一个新的值(数组)
// 3. 可以计算数组得到新的输出值(类似于map的callback)