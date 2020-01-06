# Promise

Promise 是异步编程的一种解决方案，使用链式调用解决回调地狱写法

## 状态变化

- pending -> fulfilled
- pending -> rejected

## 与 Event 区别

Promise: 创建的时候会理解执行, 取回结果然后保存, callback 在任何时候都可以获取到这个结果
Event: Event 错过了, 再传递 callback (监听事件) , 是没有办法取到结果的

## 缺点

1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署 Promise 更好的选择

## 代码

- promise0 实例化 Promise
- promise1 Promise 执行流程
- promise2 Promise.prototype.then
- promise3 Promise.prototype.catch
- promise4 then 中忽略某个状态的 callback
- promise5 Promise.resolve + Promise.reject
- promise6 应用 链式调用
- promise7 Promise.race + Promise.all
- promise8 实现简易 Promise
