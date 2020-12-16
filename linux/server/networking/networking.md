# 计算机网络

互联网

1. 主机host/端系统end system
2. 链路 + 分组交换机 连接
3. 端通过 ISP 接入 Internet

概念

- 分组 packet: 发送数据端将数据分段, 给每段加上首部字节, 形成的信息包
- 路由器 router/链路层交换机 link-layer switch 常见分组交换机
- 路径 route/path: 一个packet 经历过的 链路 + 分组交换机路径

## 数据传输方式

电路交换 circuit switching: 在两台主机(发送端和接收端)创建并预留了一条专用的 端到端连接, 这条网络链路速率恒定, 不能被他人占用。

缺点:

1. 不考虑需求, 预先分配专用链路, 造成浪费
2. 专用链路组网很麻烦

分组交换 packet switching: 解决上面的缺点, 更加高效

## 分组交换

三个重要的指标(缺点优化)

- 时延
- 丢包
- 吞吐量

### 时延

总时延 =

1. 节点处理时延: 检查分组首部 + 决定将该分组导向何处
2. 排队时延: 等待传输的时间 ms/μs 级别, 取决于这个交换机的分组的拥挤程度·
3. 传输时延: 路由器将分组推到链路上花费的时间 L/R, ms/μs 级别 
  - L 分组的长度
  - R 速率
4. 传播时延: 一个bit 从一台路由器到另外一台路由器的时间, 速度为光速, 与距离相关

不同情况, 各时延占的权重不同

### 丢包

排队的队列是有限的, 流量强队接近于 1 时候, 路由器没有地方存储这个 packet , 就会直接丢弃

### 吞吐量

传输速率

分组会经过多个链路, 每个链路传输速率不同,  
文件的传输吞吐量取 min{R1, R2, R....,, RN}  
大于这个值, 会导致分组积压在某个链路 

干扰流量