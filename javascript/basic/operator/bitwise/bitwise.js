// number in js: double float
// double(in) -> 32 bit int(work) -> double(out)
// only consider how 32-bit int work.

// 32-bit int 为有符号数

const a = -18;
console.log(a.toString(2)); // -10010 自动转换为 符号 + 正数二进制的形式, 不会显示实际存储的二进制// NaN 和 Infinity 在 bitwise 运算中都视为 0
let str = 'abc';

// str -> Number(str) -> NaN -> 0
// 0000 0000
// 取反 FFFF FFFF
console.log((~str).toString(2)); // -1
