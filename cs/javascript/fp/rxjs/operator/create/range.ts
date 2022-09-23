import { Observable, Subscription, range } from 'rxjs';

let observable: Observable<number> = range(2,9);

let sub: Subscription = observable.subscribe(value => console.log(value));

// 默认为同步的