// 字面量 静态编译
var regexp = /ab+c/i;

console.log(regexp.source);

// configurable: true
console.log(regexp.flags)

// 对象模式 动态(运行时)编译
let source = 'ab+c';
let flags = 'i';
var regexp1 = new RegExp(source, flags);
