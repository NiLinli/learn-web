const foo = require('./foo');

console.log('a = ' + foo.a);

// 操作的是 foo module 中 a 的值
foo.add_a();
console.log('a = ' + foo.a);

// 当前模块拷贝的 foo.a 的值
foo.a++;
console.log('a = ' + foo.a);

console.log('b = ' + foo.b);
foo.add_b();
console.log('b = ' + foo.b);