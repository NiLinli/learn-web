let a = new String('abc');

console.log(
  typeof a,
  typeof a.valueOf(),     // 显式
  typeof (a + '')           // 隐式
);

