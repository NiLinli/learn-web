// 1. writable: false 所有对象都不可以改写
// 2. seal 操作
const obj = {
  name: 'nixixi',
};

const returnObj = Object.freeze(obj);
console.log(returnObj === obj);

returnObj.name = '123';
returnObj.age = 18;
obj.name = '123';
obj.age = 18;

console.log(returnObj, obj);
