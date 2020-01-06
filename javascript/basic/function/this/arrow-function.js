// arrow-functions adopt the this binding from the enclosing (function or global) scope.
// 箭头函数所在 函数中的 this

function foo() {
  // The arrow-function created in foo() lexically captures
  return (a) => {
    console.log(this.a);
  }
}

var obj1 = {
  a: 2
};

var obj2 = {
  a: 3
};

var bar = foo.call(obj1);

bar.call(obj2);

var objNested = {
  i: 0,
  a: {
    i: 1,
    b: {
      i: 2,
      c: function() { console.log(this.i) },
      d: () => console.log(this.i),     // 变量定义函数作用域的 this
    }
  }
};

objNested.a.b.d();  // globalThis

function foo3() {
  // 引用无效, 只能在定义处
  // var objNested2 = objNested;
  var objNested2 = {
    i: 0,
    a: {
      i: 1,
      b: {
        i: 2,
        c: function() { console.log(this.i) },
        d: () => console.log(this.i),
      }
    }
  };

  objNested2.a.b.c();
  objNested2.a.b.d();
}

foo3.call({ i: 10000 });



