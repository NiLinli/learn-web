// string concatenation
// 如果 + 一边的操作数是 string, + 就是字符串拼接
console.log(
  5 + '5',
  '5' + {},
  '5' + undefined,    // undefined => 'undefined'
  '5' + null,         // null => 'null'
  '5' + false         // false => 'false'
);

// arithmetic
// 如果不存在 string, 则进行数学运算, 非 number 数字转换为对应的 number
console.log(
  Infinity + Infinity,
  -Infinity + -Infinity,
  Infinity + (-Infinity),
);

console.log(
  +0 + +0,
  +0 + -0,
  -0 + -0
);

console.log(
  2 + false,
  false + true, // true => 1, false => 0
  2 + null,     // null => 0
  2 + undefined // undefined => NaN
)