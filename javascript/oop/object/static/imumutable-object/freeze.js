// 1. seal
// 2. writable: false
const obj = {
  name: 'nixixi',
};

Object.freeze(obj);

obj.name = '123';
obj.age = 18;

console.log(obj.name);
console.log(obj.age);
