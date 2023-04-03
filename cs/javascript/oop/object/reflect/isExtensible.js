const person = {};

console.log(Reflect.isExtensible(person));

// 无法添加新的属性 不可逆
Reflect.preventExtensions(person);
// Object.preventExtensions(person);

console.log(Reflect.isExtensible(person));

// return false
console.log(Object.isExtensible(null))
// TypeError: Reflect.isExtensible called on non-object
// console.log(Reflect.isExtensible(null))
