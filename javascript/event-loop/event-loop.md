# event loop

达到 async & unblock 调用的效果

event loops 协调:

- call stack(Main Thread)
- task queue
- micro task queue
- render
- ...

一次 loop 的大致过程, 称为 tick

每次循环取出一个 event 

- 没有回调, 完成
- 有回调, 把回调添加到 call stack 中执行回调

## Macro/Micro task

宏任务/微任务都按各自顺序执行

宏任务: 在每次迭代开始之后加入到队列中的任务需要在下一次迭代开始之后才会被执行.
微任务: 宏任务执行完成, 本次事件循环完成之前执行完微任务
   - Promise
   - process.nextTick

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
