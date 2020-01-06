function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

// simple bind --> pattern --> Function.prototype.bind
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  }
}

var obj = {
  a: 2
};

var bar = bind(foo, obj);

var b = bar(3);
console.log(b);

// ignore this

var c = 2;
function foo2 () {
  console.log(this === global)
  console.log(this.c);
}

foo2.call(null);
