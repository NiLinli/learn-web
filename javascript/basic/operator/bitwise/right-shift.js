// right shift 与 C 相同
// signed -> 算术
// unsigned -> 逻辑

// js 无法将 signed 转化为 unsigned, 所以无法通过一个运算符指定算术还是逻辑右移
// >> 将数字看作 signed
// >>> 将数字看作 unsigned

const oldValue = 64;

// 0... 0100 0000
// 0... 0001 0000
console.log(oldValue >> 2); // signed 补 0
console.log(oldValue >>> 2); // unsigned 补 0

const negOldValue = -64;
// 11111111 11111111 11111111 11000000

// 算术
// 11111111 11111111 11111111 11110000
// 0...                       00001111
// +                                 1
// 0...                       00010000
console.log(negOldValue >> 2); // -16

// 逻辑
// unsigned int negOldValue2 = (unsigned)negOldValue;
// negOldValue2 >> 2
// 0011 1111  1111 1111 1111 1111 1111 0000
console.log(negOldValue >>> 2 === 0x3ffffff0);


