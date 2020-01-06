import { Observable, timer, Subscription } from 'rxjs';
import { observerTest } from '../../common';


let observable: Observable<number> = timer(8000, 100);

let sub: Subscription = observable.subscribe(observerTest);

setTimeout(() => {
    sub.unsubscribe();
}, 10000);

// 延时 8000
// 100 interval