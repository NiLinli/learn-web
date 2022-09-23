import { Observable, Subscription , interval} from 'rxjs';

let observable:Observable<any> = interval(1000);
let subscription:Subscription = observable.subscribe(x => console.log(x));

console.log(subscription.closed);

setTimeout(() => {
    subscription.unsubscribe();
    console.log(subscription.closed);
}, 5001);