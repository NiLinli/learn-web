import { of, interval } from 'rxjs';
import { take, buffer, bufferCount } from 'rxjs/operators';
import { observerTest } from '../../common';

interval(500).pipe(
    take(10),
    bufferCount(3, 2)           // 3 是缓存区最大长度 2 是隔几个数据开启一次缓冲区
).subscribe(observerTest);
