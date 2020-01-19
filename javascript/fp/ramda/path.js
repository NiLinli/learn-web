const R = require('ramda');

// 取指定路径上面的值

console.log(R.path(['a', 'b'], { a: { b: 2 } }));
console.log(R.path(['c', 'a'], { a: { b: 2 } }));