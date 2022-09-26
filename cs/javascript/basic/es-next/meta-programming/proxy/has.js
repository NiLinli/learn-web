// in 是否在原型链上

var normalObj = {
  a: 1,
  b: 2,
  c: 3, 
  d: 4
};


var p = new Proxy(normalObj, {
  has(target, name) {
    console.log(`has ${name}`);
    // return name in target;
    return Reflect.has(target, name);
  }
});


console.log('a' in p);
console.log(Reflect.has(p, 'b'));


// 约束 has 不可被代理情况
// 对象某一属性 不可配置 configure: false  
// 目标对象不可以 isExtensible: false