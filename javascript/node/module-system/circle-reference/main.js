console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);


// main 
// -> a 
//      -> b   2. 完成加载，并将 exports 对象提供给 a.js 模块。
//            -> a  1. exports 对象的 未完成的副本 给 b.js 模块  打破循环引用


// 循环引用需要严格的规划才能够正常的工作