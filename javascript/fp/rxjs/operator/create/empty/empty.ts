import { empty, Observable } from 'rxjs';
import { observerTest } from '../../common';


empty().subscribe(observerTest);

// empty 會給我們一個空的 observable
// 订阅立即发送 complete 