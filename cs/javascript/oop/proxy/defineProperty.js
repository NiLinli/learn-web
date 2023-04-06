var target = {
  a: 1
};

var p = new Proxy(target, {
  set(target, name, receiver) {
    console.log(`[handler.set] ${name}`);
    return Reflect.set(target, name, receiver);
  },
  defineProperty(target, name, desc) {
    console.log(`defineProperty ${name}`);
    return Reflect.defineProperty(target, name, desc);
  },
});

// 优先级
// set handler
// defineProperty handler
// none
p.a = 2;  

Reflect.defineProperty(p, 'b', { value: 5 });
Object.defineProperty(p, 'c', { value: 8 });

console.log(target);