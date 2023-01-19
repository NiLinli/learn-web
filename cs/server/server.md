# web server

web 服务器软件

1. 监听端口响应请求
2. 处理并发请求

## 组成

一般分为两层

- web 容器
  - 运行应用代码文件或者编译好的字节码文件
  - 实现一种 IO 模型
- 实现模块/接口
  - 提供应用程序监听 io 的接口, 代码实现了相关 http 接口/模块

### web 容器位置

- 单独安装 
- 嵌入到开发环境中

## 常见 web server

- nginx
  - http 模块
- tomcat/jetty
  - servlet 接口
- netty
- node
  - http 模块

