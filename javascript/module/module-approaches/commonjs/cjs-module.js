// 导出
// 导出方式 1
// foo.js
module.exports = {
  a: 1,
  b: 2
};

// 导出方式 2
exports.a = 1;
exports.b = 2;

// 2 等同于
// exports = {};
// exports.a = 1;
// exports.b = 2;
// module.exports = exports;


// 导入
// main.js
const foo = require('./foo');