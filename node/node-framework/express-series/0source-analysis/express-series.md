# express series

1. connect
2. express
3. koa

## connect

original author: TJ

- middleware(支持 path 区分)
- mixin EventEmitter.prototype

## express

original author: TJ

扩展 connect

- 提供内置中间件
  - init  
    - 标记 X-Powered-By Header
    - 改写 req, res prototype 为提供大量方法的 app.request, app.response
  - query 处理 url params
- 暴露一些推荐的中间件, 现已废弃该做法
- 提供 Router & Route 模块
- 提供 static(serve-static package) 加载静态文件
- 提供 render 方法加载 html

## koa

original author: express 后续维护者

- 更改 middleware 实现方式
- req, res 方法魔改
