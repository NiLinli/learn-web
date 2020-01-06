import { bindCallback } from 'rxjs';
import { } from 'rxjs/operators';
import { observerTest } from '../../common';


// 1. 输入是带有多个参数的函数, 函数的最后一个参数必须是回调函数
// 2. 输出是一个返回 Observable 的函数

// setTimeout(() => {

// }, timeout);

function foo(number, callback) {
    callback(number + 1);
}

const boundFoo = bindCallback(foo);

boundFoo(1).subscribe(observerTest);

// 回调完成后会 complete


function foo2(number1, number2, callback) {
    callback(number1 + 1, number2 + 3);
}

const boundFoo2 = bindCallback(foo2);

// 多个参数
boundFoo2(1, 2).subscribe(observerTest);

// 多个参数 selector 处理

const boundFoo2Selector = bindCallback(foo2, (x, y) => x + y);
boundFoo2Selector(1, 2).subscribe(observerTest);


var obj = {
    foo
};

const boundObjFoo = bindCallback(obj.foo);
boundObjFoo.call(obj, 2).subscribe(observerTest);