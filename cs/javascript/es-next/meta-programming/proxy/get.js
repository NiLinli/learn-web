let handler = {
  get: function(target, name, context){
    return Reflect.get(target, name, context);
  }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b);    // 1, undefined
console.log('c' in p, p.c);    // false, 37

// proxy get handler: 整个对象 get 的处理
// getter: target 某个属性 get 的处理
let normalObject = {
  a: 1,
  get b() {
    return this._b || 0 + 1;
  },
  set b(value) {
    this._b = value;
  }
};

let p2 = new Proxy(normalObject, {
  get: function(target, name) {
    console.log(`p2 get name is ${name}`);
    return Reflect.get(target, name);
  }
});

console.log(p2.b);
console.log(normalObject.b);
