import { interval, zip, of, from } from 'rxjs';
import { take } from 'rxjs/operators';

let ob1 = interval(500).pipe(take(3)),
    ob2 = interval(300).pipe(take(6));

zip(ob1, ob2).subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});



// 与 combineLatest 对比
var weight = of(70, 72, 76, 79, 75);
var height = of(1.76, 1.77, 1.78);
zip(weight, height, (w: number, h: number) => {
    console.log(`weight output: ${w}`);
    console.log(`height output: ${h}`);
    return w / (h * h);
}).subscribe(x => console.log('BMI is ' + x));

// (70 72 76 79 75)
//                  (1.76     1.77   1.78)  

//                  70|1.76 72|1.77 76|1.78


// demo
zip(from('hello world!!!'), interval(1000), (x, y) => x)
    .subscribe(value => console.log(value))


// 1. 取相同的排序(第几个)为一组
// 2. 其中一个 compelte 了就不会发送新的值了
// 3. zip 会 cached 未处理的元素, 造成内存使用浪费, 尽量不要使用