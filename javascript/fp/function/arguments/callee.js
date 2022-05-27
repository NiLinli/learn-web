'use strict';

// 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * arguments.callee(n-1);
  }
}

console.log(factorial(5));