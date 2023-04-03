const o = Object.create({ a: 1 });

o.b = 2;
o.c = 3;

 // deleteProperty 只能删除 own property, 不能删除原型链
Reflect.deleteProperty(o, 'a')
delete o.a;


delete o.b;
Reflect.deleteProperty(o, 'c');

console.log(o.a, o.b, o.c);

