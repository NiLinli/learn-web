# event loop

达到 async & unblock 调用的效果

event loops 协调:

- call stack(Main Thread)
- micro task queue
- render
- macro task queue
- ...

一次 loop 的大致过程, 称为 tick

每次循环取出一个 event 

- 没有回调, 完成
- 有回调, 把回调添加到 call stack 中执行回调

## Macro/Micro task

宏任务/微任务都按各自顺序执行, 都维持在各自队列里面

Task Queue -> MicroTask -> Render -> MacroTask

### Micro task(Job)

可以在当前 Job 中添加 Job, 也会被执行  
微任务执行完成后 才会执行 Task  

- Promise.then/catch/finally
  - Promise resolve 阶段可能是一个宏任务
  - Promise.then callback 是添加微任务
- process.nextTick

**Promise 在 PromiseA+ 没规定宏任务还是微任务实现, 所以不一定是微任务**

### Macro task(Task)

一般会在下一个 tick 中才会 loop

- setTimeout
- setInterval
- setImmediate
- I/O tasks
- ...


## Browser

event loop 根据浏览器设置的频率去检查 call stack 是否为空
频率和浏览器 render 的频率相关

render 和 callback 都需要 call stack 为空才能工作  
假定浏览器设定的刷新了为 60Hz, 即浏览器每 16.6ms **查询** call stack 是否为空？

Js call stack 为空时候, render queue 与 callback queue 才能工作, 并且竞争

- call stack 执行完了
  1. 首先 render(**高优先级**)
  2. 然后将 callback push 到 Js call stack 中执行
  3. 继续查询
- call stack 未执行完成
  - 页面不 render, 处于 block 卡死状态

callback 执行不要超过 16.6ms, 因为放入到了 call stack, 会导致 GUI block

## Node

- V8
- Node APIs(I/O, timers, ...)
- callback queue
- ...

Node 中 callback queue 比较复杂

- timers: 执行定时器 callback
- pending callbacks: 执行 I/O callback
- idle, prepare
- poll: 获取新的 I/O事件, 有事件执行, 没有事件就到下一个阶段
- check: 执行 setImmediate callback
- close: 执行某些 close 事件对应的 callback

## ETC

- setTimeout 0 HTML5 0 为 4, Node 0 为 1
