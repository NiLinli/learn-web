# middleware

Middleware lets you **wrap the store's dispatch method** for fun and profit.

a single standard way to extend dispatch in the ecosystem.

## 思路

- monkey patch 改写 store.dispatch
- wrap store.dispatch 调用 (选用)

## applyMiddleware

```js
function createStore(reducer, preloadedState, enhancer) {


  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }
    // 递归调用了自己
    return enhancer(createStore)(reducer, preloadedState);
  }

  // 初始化 Store
  dispatch({
    type: ActionTypes.INIT
  });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}
```


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
        getState: store.getState,
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
