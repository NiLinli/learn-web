# nginx

- 静态文件服务器
- http 请求转发器
  - 负载均衡 upstream
  - 反向代理 proxy_pass

## 特点

- 热部署
- 性能好, 稳定性强
- master-worker 模式

## 网络相关命令

- `netstat` 查看相关端口 `net-tools` package

## 安装

需要前提工具

- gcc
- pcre pcre-devel
- zlib zlib-devel
- openssl openssl-devel

1. `yum install -y gcc pcre pcre-devel zlib zlib-devel openssl openssl-devel`
2. `./configure`
3. `make && make install`

## sbin

```bash
./nginx -s reload # 重新载入配置文件
./nginx -s reopen # 重启 nginx
./nginx -s stop   # 停止 nginx
```

## 查看 nginx 所占用的端口

`netstat -tnlup | grep nginx`

## 架构

多进程

- 1 个 master 进程
- 多个 worker 进程

```bash
ps aux | grep nginx
#
root     10400  0.0  0.1  24864  1408 ?        Ss   09:29   0:00 nginx: master process ./nginx
nobody   10706  0.0  0.1  25288  1812 ?        S    11:02   0:00 nginx: worker process

netstat -tnlup | grep nginx
#
tcp  0  0 0.0.0.0:80  0.0.0.0:*  LISTEN  10400/nginx: master
```

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

### Nginx 持续运行

Keepalived + Nginx 组合

## nginx 配置

`config/nginx.conf` 配置文件

Nginx可以进行IP访问控制

### 虚拟主机

静态资源

- 通过 server_name 区分可以部署多个虚拟主机

### 负载均衡

### 反向代理

### 缓存

访问同样一个文件
src 不变, 服务器变化了, 请求的文件也就变化了
