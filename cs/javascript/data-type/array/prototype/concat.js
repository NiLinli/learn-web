let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.concat(7, 8, [9, 10]);

// 1. 基本类型
// 2. 没有嵌套的数组 -> 拍平
console.log(newArr);

// 复制一个数组
let newArr2 = arr.concat();
console.log(newArr2);