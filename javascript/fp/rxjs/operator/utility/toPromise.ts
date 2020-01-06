import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

of(1, 2, 3, 4).toPromise().then(
    (value) => console.log(value)
);

interval(1000).pipe(
    take(5)
).toPromise().then(
    (value) => console.log(value)
);

interval(1000).toPromise().then(
    (value) => console.log(value)
);

// Promise 不支持 emit 多个值
// toPromise 会将 Observable 转化为 emit 最后一个值

