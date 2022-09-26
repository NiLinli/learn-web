// . 特殊字符
// \. 逃逸字符 指点
const str = 'aA9-%#@_\n208384';

// 任何字符除了 \n, \r, \u2028 or \u2029
const regexp = /./g;

// ES2018 s flag 任何字符 dotAll
const regexp1 = /./gs;

console.log(str.match(regexp));
console.log(str.match(regexp1));