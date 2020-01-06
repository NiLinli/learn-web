console.log('b 开始');
exports.done = false;
const a = require('./a.js');      // 返回一个未完成的 a 的副本
console.log('在 b 中，a.done = %j', a.done);
exports.done = true;
console.log('b 结束');