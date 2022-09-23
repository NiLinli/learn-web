'use strict';
const person = {
  age: 18,
};

Object.defineProperty(person, 'name', {
  configurable: true,
  writable: false,
  enumerable: true,
  value: 'nixixi',
});

// not writable 不会报错, 但是也不会改变, 写了个寂寞
// 严格模式会报错
person.name = 'nixixi1111';
console.log(person.name);
