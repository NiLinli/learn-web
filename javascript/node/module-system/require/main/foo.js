const foo = 'foo';

console.log('foo 是不是主模块?');

console.log(require.main === module);

exports.foo = foo;