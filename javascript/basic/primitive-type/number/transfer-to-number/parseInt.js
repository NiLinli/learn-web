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

// 特点: 丢弃不识别的char 后续字符, 只有全部都不识别(第一个字符不识别, 才会返回 NaN)
console.log(parseInt('123a456'));
console.log(parseInt('08', 8));
console.log(parseInt('a08', 8));

// parseFloat
// 特点和 parseInt 一样, 不支持 radix
// 增加对一个 . 的支持

console.log(parseFloat('9000.123a456'));
console.log(parseFloat('9000.123.456'));

// 非 string 参数会尝试调用 toString 方法
const func = () => {};
func.valueOf = () => '098a456';  // 因为参数要求为 string, valueOf 不起作用
func.toString = () => '123a456';
console.log(parseInt(func), parseFloat(func));
