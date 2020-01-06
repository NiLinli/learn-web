// 8. If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// 9. If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.
// object 和 number/string 进行比较， object 做隐式转换

console.log(
  // number/ string -> number / boolean -> number
  [1] == '1',
  ['1'] == 1,
  ['1'] == true

);


// ToPrimitive 方式
// 1. valueOf
// 2. toString