# upstream

load balance

1. 解决**单点故障**
2. 分发流量  

利用反向代理到内网去分发流量, 域名的相关操作也在这层去处理

## 负载均衡策略

### 算法

- Round Robin
- Least Connections
- IP Hash

### 健康检测

保证流量只会分配到健康的服务器

## 前端

前端负载均衡服务器, 防止单点故障  
静态资源没有逻辑处理等待, 多加一层只会导致变慢  

## 服务端

服务端有逻辑处理等待, 流量分发可以达到服务器资源占用平衡

### session

保证同一用户两次访问分配在一个服务器

- IP hash
- Sticky session

## config

http -> upstream

- 地址(端口号)
- weight 权重

## https

- 80 配置 rewrite https 强制使用 https
- 443 配置虚拟主机

可以将上述配置配置在负载均衡服务器  
然后 443 中指向对应的应用服务器, 应用服务器只需监听 80 端口即可