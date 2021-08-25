# child_process 子进程

执行子进程, 也就是执行其他的应用

- spawn(command[, args][, options])  
- exec(command[, options][, callback])  
- execFile(file[, args][, options][, callback])  
- fork(modulePath[, args][, options])  

返回值 ChildProcess

## 集群

1. 单进程单线程对多核使用不足, 启动多进程 master-work 模式
2. 进程间通信
