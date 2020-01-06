// 密封
// 1. configurable:false
// 2. Object.preventExtensions()

let myObject = {
  name: 'nixixi'
};

Object.seal(myObject);

myObject.b = 3;
console.log(myObject.b); // undefined