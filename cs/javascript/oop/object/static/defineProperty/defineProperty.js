// IE9 +

// 定义 或者 修改 属性的描述

// - value(undefined)
// - writable(false) 可写? 
// - enumerable(false) 可被遍历？
// - configurable(false) 可删除/可改写其他 property?
// - get/set(undefined)

// 相关: Object.getOwnPropertyDescriptor(object, property)
const person = {
  age: 18,
};

// 对象字面量定义, 默认为 true
// {
//     value: 18,
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(person, 'age'));

Object.defineProperty(person, 'name', {
  configurable: true,
  writable: true,
  // 不指定的话, 默认 false (falsy), **使用 Object.defineProperty 定义的时候, 要把属性描述符写完整**
  // enumerable: false,
  value: 'nixixi',
});

// 可以修改描述
Object.defineProperty(person, 'name', {
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
