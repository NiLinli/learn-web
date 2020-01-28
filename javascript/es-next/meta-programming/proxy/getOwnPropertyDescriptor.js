var normalObj = {
  a: 1
};

var p = new Proxy(normalObj, {
  getOwnPropertyDescriptor(target, name) {
    console.log(`getOwnPropertyDescriptor ${name}`);
    return Reflect.getOwnPropertyDescriptor(target, name);
  }
});

console.log( Object.getOwnPropertyDescriptor(p, 'a'))
p.a = 5;