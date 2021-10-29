// exec 扩展
// exec 返回结果集合 iterator

const str = 'abcbbbccc';
const regexp = /b/;
const result = regexp[Symbol.matchAll](str);
console.log([...result]);

// String.prototype.matchAll called with a non-global RegExp argument
// 使用 String.prototype.matchAll 的方式必须要是 global 匹配的
// console.log([...str.matchAll(regexp)]);

const regexp1 = /b/g;
const result1 = regexp1[Symbol.matchAll](str);
console.log([...result1]);

console.log([...str.matchAll(regexp1)]);
