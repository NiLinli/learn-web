// 'use strict';


function foo() {
  // If you try to set a variable that hasn't been declared,
  // you'll either end up creating a variable in the top-level global scope
  // 严格模式下会报错
  // Always formally declare your variables.
  c = 4;
}


foo();
console.log(c);
