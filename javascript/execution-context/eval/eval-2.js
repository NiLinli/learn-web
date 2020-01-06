// 严格模式下 eval 内的代码，不改变原本的 scope 

'use strict';

function foo(str) {
  eval(str);
  console.log(c);
}

foo('var c = 4;');