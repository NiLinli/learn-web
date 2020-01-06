
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';

let source: Observable<null> = throwError('whoops!!!');


source.subscribe({
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!');
    },
    error: function (error) {
        console.log('error:' + error)
    }
});


const ob = of(1, 2, 3, 4, 5);

ob.pipe(
    map((value: number) => {
        if (value < 3) {
            return value;
        } else {
            throw 'hehe';
        }
    })
).subscribe(
    (value) => console.log(value),
    (err) => console.log('err:' + err),
    () => console.log('Complete!!!')
);

// throwError 创建的 Observerable 
// 立即发送错误通知的 Observable