// 修改原数组

let arr = [33, 4, 1111, 222];
let oldArr = arr.sort();

console.log(oldArr === arr); // true

// lambda function return
// > 0 a 在后 升序
// = 0 
// < 0 a 在前 降序

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);


