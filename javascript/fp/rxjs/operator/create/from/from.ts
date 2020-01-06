import { Observable, from } from 'rxjs';
import { observerTest } from '../../common';

// array
from(['a', 'b', 'cd', 'fe']).subscribe(observerTest);

// array-like
// 1. string
from('abcdfe').subscribe(observerTest);

// iterator


// promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello Promise -> RxJS!');
    }, 3000)
})

// 1. 发射一次值
// 2. 然后完成
from(promise).subscribe(observerTest)


