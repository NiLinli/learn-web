# cs concept

## 并发 concurrency

描述任务的执行, 任务调度视角  
任务是非原子性的, 所以多个任务同时执行会导致每个**任务中**的步骤发生冲突或者覆盖

- 并发 concurrency: 存在多个任务, 并且某一时间段内执行多个任务
  - 并行: 多核多线程(多个线程分布在不同的 core 上面, 可能会出现该情况)
    - 强调 cpu 时间上同时执行
    - cpu 核心之间
    - cpu 与其他 io 硬件之间
  - 串行: 单核多线程
- 顺序 sequential: 每一个时间段内执行单个任务
  - 只能串行执行

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

## 原子性 atomic

原子不可分割  
atomic operation 不可分割的操作

- sql 事务: 整体成功, 整体失败, 满足条件的最小操作
- 编程语言操作符: 不会被分解成多个操作, 是单一最小的操作


## 编程方法

- procedural programming
- object-oriented programming
  - aspect-oriented Programming
- functional programming
- reactive programming 
  - 响应式编程 强调改变状态 会有其他衍生状态(视图)更新 称为响应式
    - 视图 redux mobx vuex
    - 数据流 rxjs stream 
  - 一般需要结合 functional programming 使用

## Meta programming

Meta programming is programming where the operation targets the behavior of the program itself.

在编译时 **compile** 修改生成的代码  
在运行时 **runtime** 生成和改变自身的代码  

### Code Generation 

- C: Macro
- Js: eval

### Reflection/Reflective programming 

正向: 程序 -> 运行
反射: 运行时执行代码 -> 效果改变/内省程序运行 

通过允许在运行时存取程序数据(自身信息), 以改变程序行为的程序设计技术。
is the ability of a process to examine, introspect, and modify its own structure and behavior.

- Introspection 内省/自我检查 检查对象
  - JS Reflect
    - typeof/instanceof/in
    - Object
  - Java Reflect
- Self-Modification 自我修改, 改变对象的特性
  - Symbol.iterator...
  - Monkey patch
- Intercession 调解, 在两者中间走过
  - JS Proxy


