# websocket

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

自定义的文件类型/数据类型声明， 比如类似于 json 等

## 心跳监测

1. 客户端主动发送 ping 消息
2. 服务端收到 ping 消息后, 发送 pong 消息

## 参考资料

https://www.zhihu.com/question/37647173/answer/1403359896