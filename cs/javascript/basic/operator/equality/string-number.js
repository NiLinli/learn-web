// 4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
// 5. If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
// number 和 string 比较, 隐式转换 string to number
console.log(
  43 == '43',
  '43' == 43
);

// 特殊
console.log(Number(''))
console.log(Number('       '));
console.log(Number('\n'));
console.log(0 == '', '' == 0);
console.log(0 == '\n', '\n' == 0); 