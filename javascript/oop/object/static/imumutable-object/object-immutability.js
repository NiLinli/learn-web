// 1. 已有属性不可写   writable: false
// 2. 已有属性不可配置 configurable: false
// 3. 不许扩展添加属性 (对象层面)

// ie9+ support
// polyfill 不支持实现, 只能不报错, 不处理对象
// Object.preventExtensions => 3
// Object.seal              => 2 + 3
// Object.freeze            => 1 + (2 + 3)

// 新建对象
const obj = {};

// Object Constant
Object.defineProperty(obj, 'NAME', {
  value: 'nixixi',
  writable: false,
  configurable: false,
});

// Prevent extensions
Object.preventExtensions(obj);

obj.b = 3;
console.log(obj.b); // undefined
