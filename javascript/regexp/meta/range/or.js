// x|y 匹配 x or y  xy 指一个整体, 并不是特指一个字符
// 支持多个字符
const regexp = /green|red/;

console.log('green apple'.match(regexp));
console.log('red apple'.match(regexp));

// | 前后都会被堪称一个整体
// 部分范围的话需要 group 包裹
const regexp2 = /ni(linli|xixi)/g;

console.log([...'nilinli is nixixi'.matchAll(regexp2)]);
