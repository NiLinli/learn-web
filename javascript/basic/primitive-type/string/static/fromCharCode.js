const str = '𠮷';
const str1 = '\uD834\uDF06'; // UTF-16 使用代理对表示一个 UBMP 字符

// fromCharCode
// 只接受 bmp 字符, 超出范围, 超出的部分会被去掉
console.log(String.fromCharCode(0x1d306)); // 超出部分截断了
console.log(String.fromCharCode(0xd306));

// 可以使用两个 code unit 表示一个 ubmp 字符  -> fromCodePoint polyfill
console.log(String.fromCharCode(0xd834, 0xdf06));
console.log(String.fromCodePoint(0x1d306));
