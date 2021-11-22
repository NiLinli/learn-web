# static

http -> server -> location

## 虚拟主机 virtual server

- listen
- server_name

通过端口号和域名定位虚拟主机

### 单一虚拟主机

**所有应用都在一个域下面**

一个 vs, 占用一个端口号, 通过 location 区分静态网站

### 多虚拟主机

1. 相同 port
2. 通过 server_name 区分应用

有负载均衡服务器后 server_name 都指向负载均衡服务器, 虚拟主机无法获取 server_name, 通过不同 port 区分应用

## https

- 80 配置 rewrite https 强制使用 https
- 443 配置虚拟主机

可以将上述配置配置在负载均衡服务器  
然后 443 中指向对应的应用服务器, 应用服务器只需监听 80 端口即可

## 缓存

## rewrite

rewrite & return 301
