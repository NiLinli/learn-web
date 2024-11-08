// x|y 匹配 
// x y 指一个子正则表达式, () 表达式界限
const regexp = /green|red/;

console.log('green apple'.match(regexp));
console.log('red apple'.match(regexp));

// | 前后都会被堪称一个整体 因为优先级很低
// 部分范围的话需要 group 包裹
const regexp2 = /ni(linli|xixi)/g;

console.log([...'nilinli is nixixi'.matchAll(regexp2)]);
