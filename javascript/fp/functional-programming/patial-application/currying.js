// 将一个多元函数转变为一元函数
// 每次调用一个一元函数直到调用到结束
var _ = require('lodash');

const sum = (a, b) => a + b;
const curryiedSum = (a) => (b) => a + b;

console.log(`sum(a, b) = ${sum(1, 2)}`);            // 一次调用 n 个 argument
console.log(`sum(a)(b) = ${curryiedSum(1)(2)}`);    // n 次调用 -- 每次调用 1 个 argument

// auto-currying
var curryiedAdd = _.curry(add);
console.log(curryiedAdd(1)(2)(3));