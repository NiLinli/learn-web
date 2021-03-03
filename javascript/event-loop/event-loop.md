# event loop

event loops 协调:

1. call stack
2. callback queue
3. others...

一次 loop 的大致过程

1. 检查 call stack 是否为空
2. 在合适时机, 将 callback queue 添加到 call stack 中执行

## sync/async

使用异步

浏览器
Js 执行和 GUI 渲染是互斥的, 同步执行代码时间过长会导致 GUI 不能及时渲染, 阻塞卡死

Node
单线程同步会导致多并发时候, 串行执行, 时间为 N1 + N2 + N3 + ...  
采用并行执行的方法会大大提升响应速度

1. 多线程
2. 单线程异步(Node)

## V8 Engine

语言类型

- 编译型语言: 完全编译, 直接执行
- 解释型语言: 边编译(解析), 边执行

解释型语言执行速度慢一些, 所以性能提升是很重要的, V8 Engine 应运而生

V8 = call stack + heap

callstack

1. blocking
2. blow-stack
3. trace

纯 JS Runtime, 不包含任何其他 I/O 功能

## Macro/Micro task

1. 宏任务/微任务都按各自顺序执行
2. 宏任务就是正常的 callback queue
3. 微任务会在进入 event loop 前清空
   - Promise
   - process.nextTick

## Browser

- V8
- web APIs: timers + DOM + HTTP Request not in V8, called webAPIS
- callback queue(task queue): web APIs 执行完成后将 callback push 到 task queue 中, 等待执行
- render
- ...

### render

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
