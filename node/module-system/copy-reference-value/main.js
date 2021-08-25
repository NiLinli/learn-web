const foo = require('./foo');

console.log('a = ' + foo.a);
foo.add_a();
console.log('a = ' + foo.a);

console.log('b = ' + foo.b);
foo.add_b();
console.log('b = ' + foo.b);