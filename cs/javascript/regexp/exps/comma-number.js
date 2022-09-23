const num = 298444215;
const num2 = 2984442158;

// 添加千分位逗号
// 找寻位置, 并不匹配字符 => look around

const regexp = /(?<=\d)(?=(?:\d{3})+$)/g;

console.log(regexp[Symbol.replace](String(num), ','))
console.log(regexp[Symbol.replace](String(num2), ','))

// 逆序环视支持有限 去掉逆序环视
// 只能将前面捕获
const regexp2 = /(\d)(?=(?:\d{3})+$)/g;

console.log(regexp2[Symbol.replace](String(num), '$1,'))
console.log(regexp2[Symbol.replace](String(num2), '$1,'))