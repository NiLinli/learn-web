// 相关操作 Object.prototype.propertyIsEnumerable
const person = {
  age: 18,
};

Object.defineProperty(person, 'name', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: 'nixixi',
});

// not enumerable 遍历的时候忽略掉, 严格模式也不会报错
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

console.log(`name is enumerable property? ${person.propertyIsEnumerable('name')}`);
