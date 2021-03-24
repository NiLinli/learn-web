// 一个 对象 代理一个对象, 用 Proxy
const someObject = {
  a: 1,
  b: 2,
};

function proxyObject(object) {
  Object.getOwnPropertyNames(object).forEach((key) => {
    const descriptor = Object.getOwnPropertyDescriptor(object, key);

    // 私有化变量
    let _val = object[key];

    Object.defineProperty(object, key, {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
      // writable: descriptor.writable,
      get: function () {
        console.log('depend');
        return _val;
      },
      set: function (val) {
        console.log('notify');
        _val = val;
      },
    });
  });
}

proxyObject(someObject);

console.log(someObject.a);
someObject.a = 2;
console.log(someObject.a);

console.log('-----');

const otherObject = {
  a: 1,
  b: 2,
};

const otherProxy = new Proxy(otherObject, {
  set(target, prop, value) {
    console.log('depend');
    console.log(target === otherObject);
    return Reflect.set(target, prop, value);
  },
  get(target, prop) {

    console.log('notify');
    return Reflect.get(target, prop);
  },
});

console.log(otherProxy.a);
otherProxy.a = 2;
console.log(otherProxy.a);
