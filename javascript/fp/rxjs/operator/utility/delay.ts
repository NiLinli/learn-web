import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { observerTest } from '../common';


of(1, 2, 3, 4).pipe(
    delay(2000)
).subscribe(observerTest);


