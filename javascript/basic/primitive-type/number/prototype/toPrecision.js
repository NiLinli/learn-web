// precision 表示非0 数字表示的个数(整数 + 小数)
// 四舍六入 五看

const a = 5.345656;
console.log(a.toPrecision(), '-');   // 等同于 toString
console.log(a.toPrecision(3)); 
// 显示实际离散数字
console.log(a.toPrecision(30));
// 没有离散的数字就补 0
console.log(1.25.toPrecision(30), '-');

// precision 不算前面的 0
const b = 0.00001324;
console.log(b.toPrecision(2), '--');

// 某些情况下会显示指数表示
// 12 % 10 > 0 会显示指数
console.log((1234.5).toPrecision(2), '---'); 

console.log((2.55).toPrecision(2), '----')