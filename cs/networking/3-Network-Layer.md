# 网络层(互联网层)

Network => 数据单元 Packet

运输层 依赖网络层的**主机**到**主机**的通信服务, 从而提供进程到进程之间的通信。

- 数据平面: 转发
- 控制平面: 路由选择

## IP

尽力而为的交付服务
不可靠服务

- 不确保报文段的交付
- 不保证报文段按序交付
- 不保证报文段中的数据的完整性