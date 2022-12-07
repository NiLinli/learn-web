# nginx 健壮性

## Master worker

master-worker 模式

- 热部署
- 性能好, 稳定性强

### master 进程

1. 读取验证配置文件
2. 管理 worker 进程

### worker 进程

每一个 worker 进程维护一个单一的线程(避免线程切换), 处理请求

- 异步非阻塞
- 类似于 Node 的 event loop

1. master 进程监听 80 端口
2. master 建立 socket（listenfd）之后, 每一个 worker 进程都是 **copy** 的 master 进程, 所以也是监听 80 端口
3. 所有 worker 进程的 listenfd 会在新连接到来时变得可读
4. **保证一个连接只有一个 worker 会去处理**
   - 所有 worker 进程在注册 listenfd 读事件前抢 accept_mutex
   - 抢到互斥锁的那个进程注册 listenfd 读事件
   - 在读事件里调用 accept 接受该连接
   - 最后返回并断开连接

### 热部署

前提连接是由 worker 进程处理, 而重启只会操作 master 进程, 所以不会影响连接

首先 master 进程在接到信号后，会先重新加载配置文件, 然后

1. 启动新的 worker 进程, 同时通知老 worker 进程退休
2. 新 worker 进程接受新的请求
3. 老 worker 在收到来自 master 的信号后, 不再接收新的请求并且处理完已有的请求再退出

## 负载均衡服务器 keepalived

也会出现单点故障隐患  
双机热备 hot standby: keepalived + nginx

