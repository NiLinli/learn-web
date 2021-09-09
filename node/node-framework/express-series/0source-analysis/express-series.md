# express series

1. connect
2. express
3. koa

## connect

提供了一个中间件使用方法

```js
app.use(middlewareFunction)
app.use('/foo', middlewareFunction)
```

## express

express 在 connect 基础分离了路由中间件和普通中间件
为 request 和 response 添加一些简单方法

### response

- send
- json

## koa
