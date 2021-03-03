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


// 操作层级
// 1. 不允许添加新的属性 Object.preventExtensions - 不能扩展属性
// 2. 不允许修改属性描述符 Object.seal - 密封属性描述符
// 3. 不允许修改属性所对应的值 Object.freeze - 冰冻值, 不让修改

// ie9+ suport, polyfill 不支持实现, 只能不报错, 不处理对象