// a function is a main type
function foo() {}

console.log(typeof foo);

// 使用 new Function 的方式定义函数
let bar = new Function('arg1', 'arg2', 'return arg1 + arg2');

console.log(bar(1, 2));