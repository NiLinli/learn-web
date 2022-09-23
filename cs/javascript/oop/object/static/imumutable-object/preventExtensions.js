// 对象层面
// 无法添加新的属性 不可逆
'use strict';

const obj = {
  a: 1,
};

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj))

// 可以继续操作已定义的属性
Object.defineProperty(obj, 'a', {
  value: 2,
  configurable: true,
  enumerable: true,
  writable: false,
});

console.log(obj);

// 无法添加新的属性 (严格模式下会报错, 非严格模式下忽略)
// TypeError: Cannot add property b, object is not extensible
// obj.b = 123;
// console.log(obj);


