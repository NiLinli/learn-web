// 尾调用
// 一个函数最后一步(trail)执行另外一个函数(call)
// 并且没有其他 operation

// Tail call optimization 尾调用优化
// 正常调用 call stack 需要保存外层调用 call frame (调用记录 变量等)
// 尾调用因为没有其他代码了, 所以在调用时候, 不需要保存外层 call frame
// 需要引擎支持, 而且不同引擎优化程度也不同(支持比较差)

'use strict';


function f() {
  return 1;
}

// ok
function g() {
  return f();
}

// yes or not 不同引擎优化效果不同
function g1(params) {
  let y = f();
  return y;
}

// not
function g2(params) {
  return f() + 1;
}

function g3() {
  f();
  // return undefined;
}

// 优化
// g
// f
//
g();

g1();

// 未优化
// g
// g -> f
// g
//
g2();
g3();

// 尾递归优化

function fraction(n) {
  if (n === 1) return 1;
  return n * fraction(n - 1);
}

function fractionTrail(n, total = 1) {
  if (n === 1) return total;
  return fractionTrail(n - 1, total * n);
}


fraction(5) 
fractionTrail(5);
