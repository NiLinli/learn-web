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


