# middleware

洋葱圈模型

分离 **基础设施** 和 **业务逻辑**  
提供一些公共的切入点  
链式组合

## 中间件组成

### 中间件

```javascript
var middleware = function (req, res, next) {
  // TODO
  next();
};

// OR
var middleware = async function (context, next) {
  // TODO
  await next();
};
```

- 依次执行中间件或者阻断执行
- 执行的过程中不断改变 (context)req, res
- 使得最后一个中间件(业务callback)执行时候 context 有一些新的特性

### 注册中间件

将需要执行的中间件放入数组中

### 根据中间件生成 callback

根据 middlewares 生成回调 callback

### 执行 callback

选择一种方式从左向右调用

- trail call: 固定 next 方法取出下一个 middleware 执行
  - express
- compose dispatch: next 赋值为下一个 middleware, 等待上一个 middleware 调用
  - koa
  - redux
