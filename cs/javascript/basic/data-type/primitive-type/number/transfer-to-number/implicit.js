// implicit
console.log('123123' - 0); // 123123
console.log(true - 0); // 1
console.log(false - 0); // 0
console.log(null - 0); // 0
console.log(false - 0); // 0

let arr = [];
arr.valueOf = () => '3';
arr.toString = () => '2';
console.log(arr - 0);

console.log(undefined - 0); // NaN
console.log('abc' - 0); // NaN
console.log({} - 0); // NaN
console.log([1, 2, 3] - 0); // NaN

// Char 可以运算, string 不行, js 不能定义 char 类型
console.log('A' - 'a'); // NaN
console.log('A'.charCodeAt(0) - 'a'.charCodeAt(0));
