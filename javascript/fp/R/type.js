const R = require('ramda');

console.log(R.type({})); //=> "Object"
console.log(R.type(1)); //=> "Number"
console.log(R.type(false)); //=> "Boolean"
console.log(R.type('s')); //=> "String"
console.log(R.type(null)); //=> "Null"
console.log(R.type([])); //=> "Array"
console.log(R.type(/[A-z]/)); //=> "RegExp"
console.log(R.type(() => {})); //=> "Function"
console.log(R.type(undefined)); //=> "Undefined"