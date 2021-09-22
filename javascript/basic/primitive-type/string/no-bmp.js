// 字面量
const a = '𝌆';

// 1. 通过 unicode 可以算出代理对
// 2. 然后通过 fromCharCode/字面量 创建
const a1 = '\uD834\uDF06';
const a2 = String.fromCharCode(0xd834, 0xdf06);

// 直接通过 codepoint 创建
const a3 = String.fromCodePoint(0x1d306);
const a4 = '\u{1d306}';

console.log(a, a1, a2, a3, a4);

// String.prototype[@@iterator]() 遍历 ubmp 字符


