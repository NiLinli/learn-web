# async-await

In other words, a Promise is said to be the async version of a sync function's return value.

## async function

- await 调用 Promise (非 Promise 返回 Promise.resolve)
- 默认返回一个 Promise (非 Promise 返回 Promise.resolve)

## timing

- sequential    Promise 链式调用
- concurrent    Promise 同时执行, 之后顺序 then
- parallelism   Promise.all 同时执行, 执行完了同时取值
