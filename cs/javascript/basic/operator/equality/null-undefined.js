// 2. If x is null and y is undefined, return true.
// 3. If x is undefined and y is null, return true.
// null 只能和 undefined 互相隐式转换

let a = null,
  b;

console.log(
  a == b,
  b == a,
  a == undefined,
  b == null,
  ' -- ',
  // avoid use null or undefined with ==
  a == false,
  b == false,
  a == '',
  b == '',
  a == 0,
  b == 0
);