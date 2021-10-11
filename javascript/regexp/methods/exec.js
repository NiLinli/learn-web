// RegExp.prototype.exec
// RegExp.lastIndex

// 返回结果 []
// 0: 匹配文本
// 1 - n-1 子表达式匹配文本, 留给了 $1, $2...
// 数组挂载了另外两个属性
// index 匹配到的位置
// input 原始字符串

const str = 'table football, foosball';

// none 不记录 lastIndex, 每次只能解析第一个
const regexp = /foo*/;

console.log(regexp.exec(str));
console.log(regexp.exec(str));

// global 记录 lastIndex, 下次从 lastIndex 开始解析
const regexp1 = /foo*/g;

let array1;

while ((array1 = regexp1.exec(str)) !== null) {
  console.log(`Found '${array1[0]}' in position ${array1.index}, the next index is ${regexp1.lastIndex}`);
}

// 匹配不到了 lastIndex 会重置为 0
console.log(regexp1.lastIndex)

// sticky 
const regexp2 = /foo*/y;

regexp2.lastIndex = 6;
console.log(regexp2.exec(str));
console.log(`lastIndex ${regexp2.lastIndex}`, regexp2.exec(str));
