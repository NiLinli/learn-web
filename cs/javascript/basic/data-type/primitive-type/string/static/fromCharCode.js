// fromCharCode bmp
// 只接受 bmp 字符, 超出范围, 超出的部分会被去掉
console.log(String.fromCharCode(0x1d306)); // 超出部分截断了
console.log(String.fromCharCode(0xd306));

// code point => Surrogate pairs(两个 code unit)
// or fromCodePoint(codepoint)
// 表示一个 ubmp 字符
console.log(String.fromCharCode(0xd834, 0xdf06));
console.log(String.fromCodePoint(0x1d306));
