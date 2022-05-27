# Node

Node 开发者的工作本质是编写事件处理函数(同样适用于 web 开发)

- Javascript 的执行是单线程的
- Node 是多线程的

I/O 密集
CPU 密集(调用 c++)

## 组成

- V8 解析 Javascript  (与 chrome 不同之处为没有 webkit 渲染引擎处理 UI 部分)
- 中间层 (libuv)
- 网卡/硬盘... 硬件

## I/0

异步与同步: 是消息通信机制 (synchronous communication/ asynchronous communication)
阻塞与非阻塞: 程序在等待调用结果（消息，返回值）时的状态.

- 阻塞 I/O 造成 CPU 等待 浪费
- 非阻塞 I/O 需要确认是否完全完成数据获取, 让 CPU 不断去判断状态, 也是对 CPU 资源的浪费
- 减小 I/O 状态判断 CPU 的损耗

### 非阻塞异步 I/0

应用层面上面: Javascript 是单线程的
libuv层面: I/O 线程池完成异步 I/O(判断 fd 状态), 通过线程之间的通信告知 主线程(JS 执行线程)

线程池判断的方法: epoll 轮询...

### 事件循环

I/O 线程池执行完成后, 交给执行模型 event loop 执行
