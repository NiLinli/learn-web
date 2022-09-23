// 1. ie 9+
// 2. 都不包括原型链
let arr = [1, 2, 34, 5, 6];

let obj = {
  a: 1
};

Object.defineProperty(obj, 'b', {
  enumerable: false,
  value: 2
})

// enumerable 为 true 
console.log(Object.keys(arr)); // ['0', '1', '2', '3', '4']
console.log(Object.keys(obj));  // [ 'a' ]

// enumerable 没有限制
console.log(Object.getOwnPropertyNames(arr)); // ['0', '1', '2', '3', '4', 'length']
console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b' ]