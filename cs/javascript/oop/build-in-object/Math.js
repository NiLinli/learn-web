// property
console.log(Math.E); // e
console.log(Math.LN2); // LOGE 2
console.log(Math.LN10); // LOGE 10
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2); // 2 的平方根

// method
console.log(Math.pow(1 / 2, 1 / 2) === Math.SQRT1_2);
console.log(Math.cbrt(1 / 8)); // 立方根
console.log(Math.log(10) === Math.LN10);

console.log(Math.abs(-10)); // absolute 绝对值
console.log(Math.ceil(9.01));
console.log(Math.floor(10.0000000000001));
console.log(Math.round(9.41)); // 四舍五入

console.log(Math.max(1, 2, 5, 6, 8, 3));
console.log(Math.min(1, 2, 5, 6, 8, 3));


// 伪随机数 (0,1)
console.log(Math.ceil(Math.random())); // 1
console.log(Math.floor(Math.random())); // 0


// Math -> instance
console.log(typeof Math); // object
console.log(Math instanceof Object); // true
console.log(Object.getPrototypeOf(Math) === Object.prototype); // true