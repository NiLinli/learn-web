# cs concept


## IO 模型 

### IO 分类

- 网络 IO
- 磁盘 IO

### IO 调用方式 

取决于被调用方的实现

- block & unblock **调用方**调用后是否等待
  - block 线程等待结果返回
  - unblock 线程不等待结果返回
- async & sync **被调用方**返回结果的方式
  - async 通知调用方
  - sync 调用方自己去询问

### 系统内核 IO 调用方式

对于系统内核调用

- block io
  - block + sync
- nonblock io
  - unblock + sync
  - 主动询问的方式低效, CPU比较耗时
- io multiplexing
  - unblock + sync
  - 单个线程管理多个 io, 复用一个线程 
  - 基于 nonblock io 的应用
  - 操作系统提供了 fd 的遍历
    - select 
    - poll 去掉了 select 监听个数的限制
    - epoll 
      - 用户内核态只保留一份 fd 描述符, 避免复制
      - 内核不使用同步的方式轮询, 使用 asynchronous I/O
      - 返回有变化的 fd 描述符, 而不是返回变化个数自己遍历
- asynchronous I/O
  - unblock + async
  - 系统提供 async 方法调用, 不需要去遍历 fds

### 应用主线程 IO 调用方式

对于软件主线程调用 unblock 同步异步取决于包装情况

- 多线程
  - 处理 block io 达到 unblock 效果
  - sync
  - Java BIO
- io multiplexing
  - async: Node server
  - sync: Java NIO
- asynchronous I/O
  - Java AIO




