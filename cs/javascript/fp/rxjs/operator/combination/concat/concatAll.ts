import { Observable, interval, range, of, empty } from 'rxjs';
import { concatAll, take, map } from 'rxjs/operators';

let observable1: Observable<any> = of(0);

observable1.pipe(
    map((number: any) => of(1, 2, 3, 4)),
    concatAll()
).subscribe(value => console.log(value));


// 


let obs1 = interval(2000).pipe(take(5)),
    obs2 = interval(500).pipe(take(3)),
    obs3 = interval(2000).pipe(take(2));

let source = of(obs1, obs2, obs3).pipe(
    concatAll()
).subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

// flattent Observable
// 1. 发射出的 元素是 Observable ( 类比为二维数组 )
// 2. concatAll 将 Observable 打平, 即二阶转换成一阶

