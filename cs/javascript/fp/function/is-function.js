function isFunction0(o) {
  return typeof o === 'function';
}

function isFunction1(o) {
  return Object.prototype.toString.call(o) === '[object Function]';
}

var foo = function() {};
var bar = 1;

console.log(isFunction0(foo));
console.log(isFunction1(foo));
console.log(isFunction0(bar));
console.log(isFunction1(bar));

