import { of, interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { observerTest } from '../common';


of(1, 2, 3, 4).pipe(
    toArray()
).subscribe(observerTest);

interval(1000).pipe(
    take(5),
    toArray()
).subscribe(observerTest);



