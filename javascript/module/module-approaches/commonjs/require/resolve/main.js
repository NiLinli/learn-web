const foo1 = require('./foo1');
const foo2 = require('./foo2');
const foo3 = require('./foo3');

console.log(foo1);
console.log(foo2);
console.log(foo3);

// 1. If X is a file, load X as JavaScript text.  STOP
// 2. If X.js is a file, load X.js as JavaScript text.  STOP
// 3. If X.json is a file, parse X.json to a JavaScript Object.  STOP  -- json 文件 对象转换为 json 对象 
// 4. If X.node is a file, load X.node as binary addon.  STOP

// require 默认只处理
// none
// js
// json
// node