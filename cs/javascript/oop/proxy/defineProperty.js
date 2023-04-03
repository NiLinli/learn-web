var normalObj = {
  a: 1
};

var p = new Proxy(normalObj, {
  defineProperty(target, name, desc) {
    console.log(`defineProperty ${name}`);
    return Reflect.defineProperty(target, name, desc);
  }
});

p.a = 2;      // **赋值会触发**
Reflect.defineProperty(p, 'b', { value: 5 });
Object.defineProperty(p, 'c', { value: 8 });

console.log(normalObj.c)