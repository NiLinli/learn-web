var normalObj = {
  a: 1,
  b: 2,
  c: 4
};

var p = new Proxy(normalObj, {
  deleteProperty(target, name) {
    console.log(`delete key: ${name}`);
    return Reflect.deleteProperty(target, name);
  } 
})


delete p.a;
Reflect.deleteProperty(p, 'b');

console.log(normalObj);