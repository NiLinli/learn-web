import { of, interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { observerTest } from '../common';

// value -> Observable -> Observable 完成后, 这个值才发送出来

of(1, 2, 3, 4, 5).pipe(
    delayWhen((v) => interval(Math.random() * 1000))
).subscribe(observerTest)