console.log(
  Infinity % 100,
  100 % 0,
  Infinity % Infinity,
);

console.log(
  100 % Infinity,   // 100
  0 % 100,          // 0
);

console.log(
  100 % '3'   // 先 Number() 后运算
)