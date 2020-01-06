let person = {};

Object.defineProperty(person, 'name', {
  configurable: false,  // not configurable
  writable: true, 
  enumerable: true,
  value: 'nixixi'
});

delete person.name;   // 删除 property 无效, 但是不会报错
console.log(person.name);

Object.defineProperty(person, 'age', {
  value: 18
});

console.log(person.age)

// TypeError: Cannot redefine property 会报错
Object.defineProperty(person, 'name', {
  value: 6,
  writable: true, configurable: true, enumerable: true
});


// property 只针对改属性
// 1. 不能删除 property
// 2. 不能重新定义 property
// changing configurable to false is a one-way action, and cannot be undone!