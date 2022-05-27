// slice	英[slaɪs] 美[slaɪs]
// vt.	切成片; 切下; 划分;
// -> 切数组的一段
let arr = [1, 2, 4, 56, 7, 8, 9, 0];

console.log(arr.slice(3, 5)); // [3 ,5)
console.log(arr.slice(3)); // [3, length)
console.log(arr.slice()); // [0, length)

console.log(arr.slice(0, -1));
console.log(arr.slice(0, arr.length - 1));
console.log(arr.slice(-2, -1));
