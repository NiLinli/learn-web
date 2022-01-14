// 自动推导
let annotionNum = 2;

// 无法推导就为 any
// 默认不允许隐式推导出 any => noImplicitAny: true
function fn(s) {
  // No error?
  console.log(s.subtr(3));
}
