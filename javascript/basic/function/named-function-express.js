// 'use strict';

// 用途: 代替 argument.callee
let factorial = function f(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * f(n - 1);
  }
};
console.log(factorial(5));

// 特点: named function 只能在函数内部访问(function name becomes a local variable within the function.)
try {
  console.log(f);
} catch (e) {
  console.log(e.name);
}

// 函数内修改具名函数
let foo = function f1() {
  f1 = 2;     // 1. 更改成功, 没有起作用  2. strict 模式下, TypeError: Assignment to constant variable.
  // var f1;    // 函数内部更改 f1, 创建一个 local variable 
  console.log('f1:' + f1);
}

foo();

// 函数内修改普通函数
function bar1() {
  bar1 = 1;  // 更改成功
}

let bar2 = function() {
  bar2 = 2;    // 更改成功
};

bar1();
bar2();
console.log('bar1:' + bar1);
console.log('bar2:' + bar2);