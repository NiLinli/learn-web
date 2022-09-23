console.log(Number.parseInt === global.parseInt, '-');
console.log(Number.parseFloat === global.parseFloat, '-');

// parseInt(string, radix) 在字符串中找出整数部分
// 不支持非字符串方式转换
// 特点: 支持指定进制转换
console.log(parseInt('11'), '--');    // decimal
console.log(parseInt('011'));   // ES5 default => decimal or octal
console.log(parseInt('0x11'));  // hex
// Best Practice: octal 需要显示指定 radix
console.log(parseInt('011', 8), '--');

// 宽容的 NaN
// 第一个非空格字符不为数字
// radix 不在 2-36 
console.log(parseInt('   123a456'), '---');
console.log(parseInt('08', 8));
console.log(parseInt('a08', 8));

// 1.56834853975 -> '1.56834853975' -> 1
// Math.floor
// parseInt
console.log(parseInt(1.56834853975), '----');
console.log(Math.floor(1.56834853975));
console.log(parseInt(-1.56834853975));
console.log(Math.floor(-1.56834853975), '----');








