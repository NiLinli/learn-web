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

## 异步 async

- block & unblock
- async & sync

## 原子性 atomic

原子不可分割  
atomic operation 不可分割的操作

- sql 事务: 整体成功, 整体失败, 满足条件的最小操作
- 编程语言操作符: 不会被分解成多个操作, 是单一最小的操作