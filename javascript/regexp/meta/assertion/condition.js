// lookaround 环视

// 前向断言 从左到右 顺序环视 lookahead
// x(?=y)
// x(?!y)

// 后向断言 从右向左 逆序环视
// x

const str = 'nilinli wahaha';

// 不会匹配占用任何文本
// 主要作用是判断 & 标记位置
console.log(/(?=linli)/.exec(str));


console.log(/ni(?=linli)/g[Symbol.match](str));
console.log(/ni(?!linli)/g[Symbol.match](str));
console.log(/wa(?!linli)/g[Symbol.match](str));

console.log(/li/g[Symbol.match](str));
console.log(/(?<=lin)li/g[Symbol.match](str));
console.log(/(?<!lin)li/g[Symbol.match](str));
