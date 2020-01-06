function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42, 
  foo
};

var obj1 = {
  a: 2,
  obj2
};

obj1.obj2.foo();


// Implicitly Lost
// 改变引用
// 函数参数传递 callback
var bar = obj2.foo;
global.a = 'oops, global';
bar();