# cs concept

## 并发 concurrency

存在多个任务, 任务调度视角
与之对应的是顺序 sequential, 只能存在一个任务  

任务这个纬度打乱了交叉执行

- 串行执行(单核多线程)
- 并行执行  

顺序任务是串行  
并发任务可以是并行, 也可以是串行

### 并行 parallel

同时执行, 任务中的指令执行视角, 与之对应的是串行  
可以并行的  

- cpu 之间
- cpu 与 io 之间

## IO model 

io 分类

- 网络io
- 磁盘io

调用方式 取决于被调用方

- block & unblock 调用方调用后是否等待
  - block 线程等待结果返回
  - unblock 线程不等待结果返回
- async & sync  被调用方返回结果的方式
  - async 通知调用方
  - sync 调用方自己去询问

对于系统内核调用

- block io
  - block + sync
- nonblock io
  - unblock + sync
  - 主动询问的方式如果低效会CPU比较耗时
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

## 原子性 atomic

原子不可分割  
atomic operation 不可分割的操作

- sql 事务: 整体成功, 整体失败, 满足条件的最小操作
- 编程语言操作符: 不会被分解成多个操作, 是单一最小的操作


## 编程方法

- procedural programming
- object-oriented programming
- functional programming
- reactive programming 
  - 响应式编程 强调改变状态 会有其他衍生状态(视图)更新 称为响应式
    - 视图 redux mobx vuex
    - 数据流 rxjs stream 
  - 一般需要结合 functional programming 使用