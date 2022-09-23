// 6. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
// 7. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
// 如果存在 boolean 类型, 将 boolean 类型转换为 number 类型再进行比较

console.log(
  '42' == true,
  '42' == false,  // avoid use true with ==
  1 == true,
  '1' == true
);