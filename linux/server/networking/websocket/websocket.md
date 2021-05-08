# websocket

[rfc6455](https://tools.ietf.org/html/rfc6455)

## 特点

全双工
双向

## 目的

- 支持持久连接 (http 1.1 支持 keep-alive 改善了该问题)
- 支持客户端/服务器双向通信 (过去方案: ajax 轮询 or long poll 需要服务器高速度 高并发支持)

## http 协议

和 http 基本没有关系
兼容浏览器/客户端的握手规范, 所以通过 http 进行协议转换/升级
成为 http 协议的一个补充

1. 客户端 http 请求告知服务器, 升级协议与我通信
2. 服务器端收到请求后升级到 websocket 协议, 然后返回信息告知客户端已经升级了
3. 客户端-服务端按照新的 websocket 协议通信

## RFC 6455

W3C => WebSocket API 
IETF => WebSocket 协议


传输 

二进制数据
文本

1. 借用 http 协议握手
2. 计算响应键值
3. 定义消息格式 frame


### http 切换协议

客户端(请求头)

```bash
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket  # 告知升级的协议为 websocket
Connection: Upgrade # 告知服务端需要升级协议
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat # websocket 子协议
Sec-WebSocket-Version: 13
Origin: http://example.com
```

服务端(响应头)

```bash
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
# 根据 Sec-WebSocket-Key 计算出来, 客户端收到 101 响应后会计算该字端进行匹配, 匹配成功进行通信的必要条件
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
# 升级到的子协议
Sec-WebSocket-Protocol: chat
```

## Messages

websocket 信息传输方式

## 子协议

更高级的协议和协议协商, RFC64FF 奇怪的将这些称为子协议

请求头和响应头相同 Sec-WebSocket-Protocol

请求头表示客户端期望处理的子协议, 可以有多个
响应头表示服务端使用某种子协议, 从请求头选择一个当前服务器支持的协议

自定义的文件类型/数据类型声明， 比如类似于 json 等

## 扩展 extension

服务端不能同时协商多个协议，但是可以协商多个扩展

Sec-WebSocket-Extensions

简单扩展 websocket

为 frame 添加新的操作码和数据字段
需要浏览器支持这些扩展

## 心跳监测

1. 客户端主动发送 ping 消息
2. 服务端收到 ping 消息后, 发送 pong 消息

## 参考资料


https://www.zhihu.com/question/37647173/answer/1403359896