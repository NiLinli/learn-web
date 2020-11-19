# cluster 集群

单个 Node 实例运行在单个线程当中, 充分运行多核系统, 需要启用一组 Node 进程去处理负载任务

Node.js 不会自动管理工作进程的数量，而应该由具体的应用根据实际需要来管理进程池

- cluster
- work
  - cluster.fork()
  - cluster.works Hash table

## 实现方式

- Round-robin: Master 主进程负责监听端口, 接受新连接后将连接循环分发给工作进程
- Shared listen socket: 主进程创建监听 socket 后发送给感兴趣的工作进程
