// void 干巴巴执行 expression, 消除表达式的 side effect
// 1. 执行 expression
// 2. 抛弃 expression 返回的结果, 直接返回 undefined

// 不希望 doSomething 的返回值赋值给 href
// <a href="javascript:void doSomething()"></a>

// arrow function 中避免产生副作用
[1, 2, 3].forEach((v) => void foo(v));

function foo(a) {
  console.log(a + 1);
}

function rewriteUndefined() {
  // local scope 可以使用 undefined 做变量名
  var undefined = 3;
  var a;

  console.log(a === undefined);
  console.log(a === void 0);
}

rewriteUndefined();
