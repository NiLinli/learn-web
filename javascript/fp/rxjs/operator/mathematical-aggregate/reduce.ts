import { range, interval, of, merge } from "rxjs";
import { count, take, max, delay, reduce } from 'rxjs/operators';

// 然后当源 Observable 完成时，返回 累加的结果
// 与 Array.prototype.reduce 类似

const ob1$ = of({
    lang: 'en',
    usename: 'nixixi'
});

const ob2$ = of({
    play: 'basketball'
});


merge(
    ob1$.pipe(delay(2000)),
    ob2$.pipe(delay(1000))
).pipe(
    reduce((acc, curr) => {
        for (const k in curr) {
            if (curr.hasOwnProperty(k)) {
                acc[k] = curr[k];
            }
        }
        return acc;
    }, {})
).subscribe(
    (value) => console.log(value),
    error => error,
    () => {
        console.log('complete!!!');
    }
);

