
import { Observable, Observer, merge } from 'rxjs';
import { reduce } from 'rxjs/operators';

const ob1$ = Observable.create((observer: Observer<any>) => {
    const id = setTimeout(() => {
        // 1. 发送值
        observer.next({
            name: 'nixixi'
        });
        // 2. 最好有一个 complete 状态
        observer.complete();
    }, 2000);

    // 3. 返回值为 Subscription 的 unsubscribe 方法
    return () => clearInterval(id)
});

const ob2$ = Observable.create((observer: Observer<any>) => {
    setTimeout(() => {
        observer.next({
            age: 18
        });
        observer.complete();
    }, 2000);
});

merge(ob1$, ob2$).pipe(
    reduce((acc, curr) => {
        for (const k in curr) {
            if (curr.hasOwnProperty(k)) {
                acc[k] = curr[k];
                return acc;
            }
        }
    }, {})
).subscribe(
    value => console.log(value),
    error => console.log(error),
    () => console.log('complete!!!')
);