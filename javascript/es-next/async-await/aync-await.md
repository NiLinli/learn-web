# async-await

In other words, a Promise is said to be the async version of a sync function's return value.

- async function
  - 函数中通过 await 调用 Promise
  - 默认返回一个 Promise
- await 后面接一个 Promise, 如果不是 Promise, 则返回值本身

## 时序

- sequential 链式调用, 可以不用像 Promise 链式调用使用新的变量去记录你要用到的值
- concurent 同时执行, 但是要按照顺序取结果
- parallelism 并行执行
