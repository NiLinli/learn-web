// b 2
// octal 8
// decimal 10
// hexadecimal 16 ->  0x


// String.fromCharCode(...codes: number[]): string
// String.fromCodePoint(...codePoints: number[]): string


// 传入decimal 返回由一个字符一个自负组成的字符串 (16-bit)
// 超过的截取前面一段
console.log(String.fromCharCode(65, 66, 67, 134071).length);


// es6 -> 16-bit or 32-bit ( polyfill)
console.log(String.fromCodePoint(65, 66, 67, 134071).length);




