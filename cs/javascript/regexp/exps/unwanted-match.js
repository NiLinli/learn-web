const regexp = /-?\d*\.?\d*/;

console.log(regexp.test('-1.298'));
console.log(regexp.test('1.298'));
console.log(regexp.test('.298'));
console.log(regexp.test('-.298'));


// 每一个位置都不是必须匹配的 
// 匹配没有任何必须匹配元素
// 都很 ok
console.log(regexp.test('nixixi is a handsome man'));
console.log(regexp.test('nixixi.123sfajdfl'));

// 增加一些必须匹配的元素
const regexp2 = /^-?(\d+(\.\d+)?|\.\d+)$/;

console.log(regexp2.test('1.298'));
console.log(regexp2.test('.298'));
console.log(regexp2.test('-.298'));


console.log(regexp2.test('nixixi is a handsome man'));
console.log(regexp2.test('nixixi.123sfajdfl'));