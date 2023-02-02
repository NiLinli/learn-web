# web server

web container(web 服务器软件)  = web server + interface

- web server
  - 监听端口响应请求 
  - 实现一种 IO 模型
  - 运行应用代码文件或者编译好的字节码文件
- interface 
  - 实现接口处理并发请求 
  - 提供应用程序监听 io 的接口, 代码实现了相关 http 接口/模块

## web container 位置

- 单独安装: 独立安装, 运行应用代码文件 nginx, tomcat...
- 嵌入到开发环境中: 在开发环境中集成了容器, 不需要额外单独安装 node, embedded tomcat...

## 常见 web container

- nginx
  - http 模块
- tomcat/jetty
  - servlet 接口
- netty
- node
  - http 模块

