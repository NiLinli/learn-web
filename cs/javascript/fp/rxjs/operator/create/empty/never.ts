import { Observable, never } from 'rxjs';

let source: Observable<any> = never();

source.subscribe({
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!');
    },
    error: function (error) {
        console.log(error)
    }
});

// never 创建∞的 observable
// 订阅什么都不会发生