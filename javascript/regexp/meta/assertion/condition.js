// 向前断言 断言对象在前面
// x(?=y)
// x(?!y)

const str = 'nilinli wahaha';

console.log(/ni(?=linli)/g[Symbol.match](str));
console.log(/ni(?!linli)/g[Symbol.match](str));
console.log(/wa(?!linli)/g[Symbol.match](str));

console.log(/li/g[Symbol.match](str));
console.log(/(?<=lin)li/g[Symbol.match](str));
console.log(/(?<!lin)li/g[Symbol.match](str));
