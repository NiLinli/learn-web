const foo = require('./foo');

console.log('main 是不是主模块?');
console.log(require.main === module);
// 实际上是比较
console.log(require.main.filename === module.filename)