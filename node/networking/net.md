# net

创建会话的过程中, 服务端和客户端分别提供一个 socket, 两个 socket 共同形成一个连接

## socket

- port
- domain socket

接受一切给予 TCP 连接的数据


所有的 net.Socket 都被设置为 SO_REUSEADDR