import { Observable, Subscription, interval } from 'rxjs';

let observable1: Observable<number> = interval(400);
let observable2: Observable<number> = interval(300);

let subscription: Subscription = observable1.subscribe(x => console.log('first: ' + x));
let childSubscription: Subscription = observable2.subscribe(x => console.log('second: ' + x));

// 合并两个 subscription , 方便同时取消
subscription.add(childSubscription);

setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
}, 1000);