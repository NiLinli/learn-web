// standalone function invocation.
// this === global    
// this === undefined 严格模式

function foo() {
  // 'use strict';
  // console.log(this === undefined);

  console.log(this === global);
  console.log(this.a);
}

global.a = 2;

foo();


// DMZ

function foo2(a, b) {
  console.log(`a: ${a}, b: ${b}`);
}

var ø = Object.create(null);

foo2.apply(ø, [2, 3]);

var bar2 = foo2.bind(ø, 2);

bar2(3);

