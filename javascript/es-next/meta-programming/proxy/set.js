var normalObj = {
  a: 1
};

var p = new Proxy(normalObj, {
  set(target, name, value, reciever) {
    return Reflect.set(target, name, value + 1);
  }
});

p.a = 2;
console.log(p.a);

Reflect.set(p, 'a', 8);
console.log(p.a);