const target = {
  name: 'nixixi',
  age: 18,
};

const p = new Proxy(target, {
  preventExtensions(target) {
    console.log('[handler.preventExtensions]');
    // 改写 Object.preventExtensions 操作

    return Object.freeze(target);
  },
});

p.hobby = 'basketball';
p.name = 'nilinli';

target.age = 20;

console.log(target);
