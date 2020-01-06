# event loop

## V8

V8 =  call stack + heap

callstack

1. blocking
2. blow-stack
3. trace

## web APIS

setTimeout + DOM + HTTP Request not in V8, called webAPIS

## task queue

any of web APIs pushes the callback on to the task queue when it's done.

## browswer/node

V8 + web APIs + task queue (callback queue) + ...

1. the reason we can do things concurrently is that the browser is more than just the Runtime.(V8)
2. web APIs/C++ APIs these are effectively threads ,you can just make call to, and those pieces of the browser are aware of this concurrency kick in.

event loops job is to look at 起协调作用

1. the stack
2. task queue

if the stack is empty, it takes the first thing on the queue and pushes it on to the stack(which effectively run it.)

## render queue

- block code 导致 render queue 不能执行
- async code 解决这个问题
