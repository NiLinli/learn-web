// 注解 类型定义

// 定义变量时候一般不用显示声明类型
// 自动推导
let annotationNum = 2;

// 无法推导就为 any
// 默认不允许隐式推导出 any => noImplicitAny: true
function fn(s) {
  s.slice(3);
}

export {};
