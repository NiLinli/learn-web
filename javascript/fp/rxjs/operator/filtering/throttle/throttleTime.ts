import { Observable, interval, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';


let observable: Observable<number> = interval(800);

let sub: Subscription = observable
    .pipe(
        throttleTime(1000)  // 忽略 1000ms 内连续发送的值
    ).subscribe(value => console.log(value));

setTimeout(() => {
    sub.unsubscribe();
}, 50000);

// throttle	英[ˈθrɒtl] 美[ˈθrɑ:tl]  节流阀
