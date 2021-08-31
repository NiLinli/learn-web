# middleware

通过 wrap dispatch 方法, 达到一个标准的扩展生态

## 思路

- monkey patch 改写 store.dispatch
- wrap store.dispatch 调用 (选用)

## applyMiddleware

1. 注册中间件 从左到右
2. 改写 dispatch 从右像左
3. 调用 dispatch 从左到右

```js
function applyMiddleware() {

  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
  
    return function () {
      // reducer, preloadedState
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        // context
        getState: store.getState,
        // next   
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      // compose(chain)(store.dispatch)
      _dispatch = compose.apply(void 0, chain)(store.dispatch);

      // 覆盖掉 dispatch
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

```


