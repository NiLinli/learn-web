import { empty, of } from 'rxjs';
import { isEmpty, defaultIfEmpty } from 'rxjs/operators';

// isEmpty
// true -> true
// false -> false
empty().pipe(
    isEmpty()
).subscribe(
    (value) => console.log(value),
    error => error,
    () => console.log('complete!!!')
)

of(1, 2, 3).pipe(
    isEmpty()
).subscribe(
    (value) => console.log(value),
    error => error,
    () => console.log('complete!!!')
)

// defaultIfEmpty
// true -> 发送给定的值
// false -> 原计划发送值
empty().pipe(
    defaultIfEmpty('hehe')
).subscribe(
    (value) => console.log(value),
    error => error,
    () => console.log('complete!!!')
)

of(1, 2, 3).pipe(
    defaultIfEmpty('hehe')
).subscribe(
    (value) => console.log(value),
    error => error,
    () => console.log('complete!!!')
)