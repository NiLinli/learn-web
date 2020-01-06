# middleware

分离 **基础设施** 和 **业务逻辑**

中间件处理完成后, 通知下一个中间件继续

connect : 尾触发设计

```javascript
var middleware = function (req, res, next) {
  // TODO
  next();
}
```
