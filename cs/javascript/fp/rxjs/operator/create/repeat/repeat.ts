import { interval } from 'rxjs';
import { take, repeat } from 'rxjs/operators';
import { observerTest } from '../../common';

interval(100).pipe(
    take(3),
    repeat(5)
).subscribe(observerTest);