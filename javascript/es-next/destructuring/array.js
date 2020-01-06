// 解构数组字面量
const colors = ['red', 'green', 'blue'];

let [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

let [, , thirdColor] = colors;
console.log(thirdColor);

// 赋值表达式
let colors2 = ['red2', 'green2', 'blue2'],
    firstColor2 = 'black2',
    secondColor2 = 'purple2',
    fourthColor2;

[firstColor2, secondColor2, , fourthColor2 = 'darksmalon2'] = colors2;

console.log(firstColor2);
console.log(secondColor2);
console.log(fourthColor2);

// ... 剩余项
let colors3 = ['red', 'green', 'blue'];

let [firstColor3, ...restColors] = colors3;
console.log(firstColor3);
console.log(restColors);


// 解构 交换
let a1 = 3,
    b1 = 4;

console.log(`origin a1 ${a1}`);
console.log(`origin b1 ${b1}`);

// 1. 等式右边, 新建了一个 array (temp)
// 2. 左边解构的值覆盖原来的值
[a1, b1] = [b1, a1];

console.log(`exchanged a1 ${a1}`);
console.log(`exchanged b1 ${b1}`);

// 克隆数组
let colors4 = ['darksmalon', 'yellowgreen', 'skyblue'];

let clonedColors41 = colors4.concat();
let [...clonedColors42] = colors4;

console.log(`clonedColors41 === colors4 is ${clonedColors41 === colors4}`);
console.log(`clonedColors42 === colors4 is ${clonedColors42 === colors4}`);

console.log(`clonedColors41 = ${clonedColors41}`);
console.log(`clonedColors42 = ${clonedColors42}`);




