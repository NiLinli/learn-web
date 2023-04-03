var normalObj = {
  a: 1,
};

var p = new Proxy(normalObj, {
  set(target, name, value, reciever) {
    return Reflect.set(target, name, value + 1);
  },
});

p.a = 2;
console.log(p.a);

// 除了在 handler 中使用 Reflect, 其他任意地方都可以使用 Reflect
Reflect.set(p, 'a', 8);
console.log(p.a);

// Array

var proxyArr = new Proxy([1, 2, 4, 4], {
  set(target, prop, value) {
    // 可以监听到 length 和 index 的改变
    console.log(target, prop, value);

    return Reflect.set(target, prop, value);
  },
});

proxyArr.push(1);

proxyArr.splice(1, 2, 3);
