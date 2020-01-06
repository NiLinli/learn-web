let arr1 = [1, 2, 3, 4, 5, 78, 9, '9'];

// 数组是特殊的 object
console.log(Object.keys(arr1));    // ['0', '1', '2', '3', '4', '5', '6', '7' ] 数组是 object, key index 为 数字类型的 string 类型
console.log(typeof arr1);   // object

console.log('------');

// 添加非正常属性,会被数组相关的方法和属性忽略计算
arr1[-1] = '-1aaa';
arr1.foo = 'foo';
console.log(arr1);

arr1.forEach(v => console.log(v));
console.log(arr1.length);  // 8

// sparse arrays
let arr2 = new Array(5);
console.log(arr2.length);

let arr3 = [];
arr3[100999] = 1;
console.log(arr3.length);

// in and for-in
let arr4 = [, , ,1];
let arr5 = new Array(3);

console.log('0' in arr4);
console.log('0' in arr5);
console.log(arr4);
console.log(arr5);



