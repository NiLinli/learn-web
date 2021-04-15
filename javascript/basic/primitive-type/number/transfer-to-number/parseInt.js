console.log(Number.parseInt === global.parseInt);
console.log(Number.parseFloat === global.parseFloat);

// parseInt
// 不支持非字符串方式转换
// 特点: 支持指定进制转换
console.log(parseInt('11')); // 默认十进制
console.log(parseInt('011')); // ES5 十进制, 但是有可能 Octal 或者 十进制
console.log(parseInt('0x11')); // Hex
// 结论: 显示指定 radix
console.log(parseInt('011', 8));

// 特点: 丢弃不识别的 char 后续字符, 只有全部都不识别(第一个字符不识别, 才会返回 NaN)
console.log(parseInt('123a456'));
console.log(parseInt('08', 8));
console.log(parseInt('a08', 8));

// double float/double = float 为 float, parseInt 可以用来取整数
console.log(parseInt(3/2));






