// 解构数组字面量
const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor] = colors;
// 缺省占位
const [, , thirdColor] = colors;
// 默认值
const [, , , fourthColor = 'black'] = colors;
console.log(firstColor, secondColor, thirdColor, fourthColor);

// ... 剩余项
const [, ...restColors] = colors;
console.log('restColors: ', restColors);

// 解构表达式的返回值
// 会新生成一个数组
let a, b;
const c = ([a, b] = colors);
console.log(a, b, c);
