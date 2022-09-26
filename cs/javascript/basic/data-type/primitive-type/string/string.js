const stringObj = new String('hello world');

// 转译字符
console.log('a\nb'); // 换行
console.log('name\tage\tcountry'); // t-> table 表格形式打印
console.log('nilinli\t18\tCHN');
console.log('abc\r123'); // 回车到头 然后输入123覆盖
console.log('\x41'); // asic xnn nn为16进制代码


// \uFFFF   utf-16 实际存储值
// \u{FFFF} code point 码点值

console.log('\u03a3'); // unicode bmp
console.log('\uD834\uDF06'); // unicode ubmp
console.log('\u{1d306}'); // unicode ubmp
