// number in js: double
// double(in) -> 32 bit integer(运算中) -> double(out)
// only consider how 32-bit integers work.

// 有符号数
// the first 31 of the 32 bits to represent the numeric value of the integer
// The 32nd bit represents the sign of the number: 0 for positive or 1 for negative.

// 正数
// 负数: 正数取反 + 1

let a = -18;
console.log(a.toString(2));   // -10010 自动转换为 符号 + 正数二进制的形式


// NaN 和 Infinity 在 bitwise 运算中都视为 0
let str = 'abc';
// str -> Number(str) -> NaN -> 0
// 0000 0000
// 取反 FFFF FFFF
console.log((~str).toString(2));  // -1


// right shift

var oldValue = 64;

console.log(oldValue >> 5); // signed
console.log(oldValue >>> 5);  // unsigned

var negOldValue = -64;


// 0000 0040
// FFFF FFAF
//         1
// FFFF FFB0 实际
// >>> 5
// 07FF FFFE

console.log(negOldValue >> 5);
console.log(negOldValue >>> 5);