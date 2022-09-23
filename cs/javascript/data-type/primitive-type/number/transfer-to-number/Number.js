// Number
// 不认识为 NaN

// 特点: 支持转译非 string 类型
console.log(Number(true), Number(false));
console.log(Number(null));
console.log(Number(undefined)); // NaN
console.log(Number(''));
console.log(Number(new Date()));

console.log(Number('    123123  ') === 123123);
console.log(Number('007')); // Octal
console.log(Number('0x11')); // Hex

// NaN 非数字字符串都为 NaN ,相比 parseInt 和 parseFloat 更为严谨
console.log(Number('123a456'));


// 先 valueOf, 后 toString
const func = () => {};
func.valueOf = () => '098';
func.toString = () => '123456';
console.log(Number(func));
