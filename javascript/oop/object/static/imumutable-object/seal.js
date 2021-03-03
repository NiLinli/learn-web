// 密封
// 1. 将所有属性设置为 configurable: false
// 2. Object.preventExtensions()

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

// 自行实现 seal
// 1. 已有属性 configurable: false
for (const key in p1) {
  // enumerable 为 false 的属性过滤不出来, 问题
  if (Object.hasOwnProperty.call(p1, key)) {
    Object.defineProperty(p1, key, {
      ...Object.getOwnPropertyDescriptor(p1, key),
      configurable: false,
    });
  }
}

// 2. Object.preventExtensions()
Object.preventExtensions(p1);

Object.seal(p2);

p1.name = 'nixixi123';
console.log(p1);
p2.name = 'nixixi123';
console.log(p2);

// {
//   value: 'nixixi123',
//   writable: true,
//   enumerable: true,
//   configurable: false
// }
console.log(Object.getOwnPropertyDescriptor(p1, 'name'));
console.log(Object.getOwnPropertyDescriptor(p2, 'name'));
