// slice	英[slaɪs] 美[slaɪs]
// vt.	切成片; 切下; 划分;
// -> 切数组的一段
let arr = [1, 2, 4, 56, 7, 8, 9, 0];

let newArr = arr.slice(3, 5); // [3 ,5)
let newArr2 = arr.slice(3); // [3 , length)

console.log(arr);
console.log(newArr);
console.log(newArr2);

// 复制一个数组
let newArr3 = arr.slice();    // [0, length]
let newArr4 = arr.slice(0, arr.length);
console.log(newArr3);
console.log(newArr4);