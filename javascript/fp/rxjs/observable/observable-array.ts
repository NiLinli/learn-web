import { from, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

let arr = [1, 2, 3, 4, 5],
    newArr = arr.map(x => x + 1); // 已经运算
console.log(newArr);

// 1. 延迟运算(只有订阅了 Observable 才能运算)
let source = from([1, 2, 3, 4, 5]);
let example = source.pipe(map(x => x + 1)); // 此时不会运算
console.log('?????')
example.subscribe(value => console.log(value));


console.log('---渐进式运算---');

let arr2 = [1, 2, 3],
    newArr2 = arr2
        .filter(x => x % 2 === 0) // 运算返回一个新的完整的数组
        .map(x => x + 1) // 运算返回一个新的完整的数组

// 2. 渐进式运算：每次运算都是一个元素运算到底，不像数组是每个元素运算完再通过下一个运算符
// 每个元素送出后就运算到底，在这个过程中不会等待其他元素运算
let source2 = from([1, 2, 3]),
    example2 = source2.pipe(
        filter(x => x % 2 === 0)
        , map(x => x + 1)
    );


example2.subscribe(value => console.log(value));