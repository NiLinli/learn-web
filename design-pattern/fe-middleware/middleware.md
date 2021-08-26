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
var middleware = function (context, next) {
  // TODO
  next();
};
```

- 依次执行中间件或者阻断执行
- 执行的过程中不断改变 (context)req, res
- 使得最后一个中间件(业务callback)执行时候 context 有一些新的特性

### 注册中间件

### 执行

- 尾调用  express
- compose  koa
