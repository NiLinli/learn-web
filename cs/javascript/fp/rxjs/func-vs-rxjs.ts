import { Observable, Subscription } from 'rxjs';

// func -> call -> pull
function foo() {
    console.log('Hello');
    return 42;
}
var x = foo.call({}); // same as foo()
console.log(x);
var y = foo.call({}); // same as foo()
console.log(y);

console.log('------');

// 订阅 Observable 像是调用函数, 并提供接收数据的回调函数
// rxjs -> subscribe -> push
let foo1 = Observable.create(function(observer) {
    console.log('Hello');
    observer.next(42);
});
foo1.subscribe(function(x) {
    console.log(x);
});
foo1.subscribe(function(y) {
    console.log(y);
});