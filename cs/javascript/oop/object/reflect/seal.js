// 密封
// Object.preventExtensions() 无法扩展新的属性
// 现有属性设置为 configurable: false(无法修改先有 Descriptor, value 修改和 writable 有关)

Object.seal2 = function (obj) {
  for (const key in obj) {
    // enumerable 为 false 的属性过滤不出来, 无法 polyfill
    if (Object.hasOwnProperty.call(obj, key)) {
      Object.defineProperty(obj, key, {
        ...Object.getOwnPropertyDescriptor(obj, key),
        configurable: false,
      });
    }
  }

  // 无法 polyfill
  Object.preventExtensions(obj);
};

const p1 = {
  age: 18,
};

const p2 = {
  age: 18,
};

Object.defineProperty(p1, 'name', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 'nixixi',
});

Object.defineProperty(p2, 'name', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 'nixixi',
});

Object.seal(p1);
Object.seal2(p2);

console.log(Object.getOwnPropertyDescriptor(p1, 'name'));
console.log(Object.getOwnPropertyDescriptor(p2, 'name'));
