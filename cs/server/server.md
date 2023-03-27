# web server

web server 编程 

- web container/web server
  - 监听端口响应请求 
  - 实现一种 IO 模型
  - 实现一个 interface
  - 运行方式
    - 单独安装: 独立安装, 运行应用代码文件 nginx, tomcat...
    - 嵌入到开发环境中: 在开发环境中集成了容器, 不需要额外单独安装 node, embedded tomcat...
- interface/模块
  - 提供一个切入点给 web server 处理请求的业务逻辑 / web server 配置
  - 比如 http 模块, servlet 接口
  
## 常见 web container

- nginx
  - http 模块
- tomcat/jetty
  - servlet 接口
- netty
- node
  - http 模块

