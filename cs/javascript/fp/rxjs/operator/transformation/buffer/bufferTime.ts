import { } from 'rxjs';
import { } from 'rxjs/operators';


import { of, interval } from 'rxjs';
import { take, buffer, bufferTime } from 'rxjs/operators';
import { observerTest } from '../../common';

interval(500).pipe(
    take(10),
    bufferTime(1000)           // buffer(interval(1000))
).subscribe(observerTest);
