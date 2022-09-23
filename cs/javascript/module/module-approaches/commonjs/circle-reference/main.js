console.log('main 开始');

const a = require('./a.js');
const b = require('./b.js');

console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);

// main -> a -> b -> a(检测到循环引用, 返回一个未完成的 exports 对象副本, 不再去重新执行 a)
// 循环引用需要严格的规划才能够正常的工作