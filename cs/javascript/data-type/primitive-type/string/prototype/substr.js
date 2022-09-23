// @Deprecated
const str = '1234567';

// begin index + sub length
console.log(str.substr(0, 3));
console.log(str.substr(0, str.length));
 
// 超出长度不做处理
console.log(str.substr(0, 8));
console.log(str.substr(2, 7));

// length 不支持负数, 负数作为 0
console.log(str.substr(2, -1) === '');
console.log(str.substr(2, -100));
