// 1. writable: false 所有对象都不可以改写
// 2. seal 操作
const obj = {
  name: 'nixixi',
};

Object.freeze(obj);

obj.name = '123';
obj.age = 18;

console.log(obj.name);
console.log(obj.age);
