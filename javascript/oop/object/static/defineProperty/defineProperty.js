// IE9 +

// 定义 或者 修改 属性的描述

// - configurable
// - writable
// - enumerable
// - value 

let person = {};

Object.defineProperty(person, 'name', {
    // 不指定的话, 默认都是发 false
    configurable: true, 
    writable: true, 
    // enumerable: false,
    value: 'nixixi'
});

Object.defineProperty(person, 'name', {
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(person, 'name'));