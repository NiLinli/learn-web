import { defer, of } from 'rxjs';
import { observerTest } from '../common';

// 1. 只有订阅的时候返回一个新的 Observale
// 2. 所以每个订阅的 Observable 都是新的 , 不相同


const ob$ = defer(() => of(1, 2, 3));

ob$.subscribe(observerTest);
ob$.subscribe(observerTest);