'use strict';

// property 只针对改属性
// 1. 不能删除 property
// 2. 不能重新定义 property
// 3. 定义为 false 了之后, 不能更改属性描述符, 没有回头路, 无法撤销配置
const person = {
  name: 'nixixi',
};

Object.defineProperty(person, 'name', {
  configurable: false, // not configurable
});

// 不会影响 writable
console.log(person.name);

// 删除 property 无效, 不会有反应, 删了个寂寞
// 严格模式会报错 TypeError: Cannot delete property 'name' of #<Object>
delete person.name;
console.log(person.name);

// TypeError: Cannot redefine property 会报错
Object.defineProperty(person, 'name', {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true,
});


