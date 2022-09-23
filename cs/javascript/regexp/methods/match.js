// exec 扩展
// 匹配项集合
// 无 g 匹配, 数组会添加除匹配项以外 exec 属性 
// g 匹配, 有多项, 每项属性无法设计添加到数组上, 所以只有匹配项集合

const str = 'abcbbbccc';
const regexp = /b/;
const result = regexp[Symbol.match](str);
console.log(result);

const regexp1 = /ccc/g;
const result1 = regexp1[Symbol.match](str);
console.log(result1);
