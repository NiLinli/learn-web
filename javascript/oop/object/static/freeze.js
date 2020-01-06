// 1. seal
// 2. writable: false
let myObject = {
  name: 'nixixi'
};

Object.freeze(myObject);

myObject.name = '123';
myObject.age = 18;

console.log(myObject.name);
console.log(myObject.age);