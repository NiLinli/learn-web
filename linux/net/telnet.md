# telnet

## telnet 协议

基于 TCP, C/S 模型, 用于登陆, 端口 23, 明文方式   
弃用, ssh 22 代替  

## 通过 TCP 与目标端口建立链接

`telnet www.baidu.com 80`

作为 TCP 连接的客户端

1. 打开 TCP 连接
2. 向那个端口输入一些字符(模拟其他 TCP 上层协议请求)
