var o = Object.create({ a: 1 });

o.b = 2;

console.log(o.a);
console.log(o.b);

delete o.a;   // delete 只能删除 own property, 不能删除原型链
delete o.b;   // 

console.log(o.a);
console.log(o.b);