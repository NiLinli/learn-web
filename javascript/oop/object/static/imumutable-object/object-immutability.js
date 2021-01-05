// 1. 对象层面: 不许新加属性
// 2. 属性层面: 已有属性
//    2.1 seal -> configurable: false
//    2.2 freeze -> writable: false


// 新建对象
const obj = {};

// Object Constant
Object.defineProperty(obj, 'NAME', {
  value: 'nixixi',
  writable: false,      // freeze
  configurable: false   // seal
});

// Prevent extensions
Object.preventExtensions(obj);

obj.b = 3;
console.log(obj.b); // undefined


// 已知对象
// Object.seal
// Object.freeze