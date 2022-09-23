// 全部引用
var core = require('core-js/library');

// 局部引用
var es6 = require('core-js/es6');

console.log(core.String.repeat('*', 10));
console.log(es6.String.repeat('*', 10));


// 如果 global 模式就是根据编译方式引用 core es6...
