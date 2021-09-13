// no side effect
let arr = [1, 3, 4, 5, 6, 7, 8];
arr.slice(1, 3);
arr.slice(1, 3);
console.log(arr); // [ 1, 3, 4, 5, 6, 7, 8 ]

// has side effect
// 1. 修改了调用者
// 2. 依赖/修改 外部状态
// 3. console.log
// 4. 操作 DOM
// 5. 发送 http request
// 6. 其他 IO ...

// fp 强调没有 side effect 
// 函数要纯粹: 
// 只做运算, 并返回值, 不修改 state, 不依赖任何外部状态
// 不依赖外部状态, 只依赖参数 -- 引用透明 (Referential transparency)