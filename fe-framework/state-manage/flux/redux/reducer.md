# reducer

- reducer 是一个 function, 根据 action 更新 state, (state, action) => newState
- 可以理解 action 是一个事件, root reducer 为 event listener
- 子 reducer 只是 root reducer 中的一部分函数调用, 处理 state 的一部分

## combineReducers

```js
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  // 筛选出 key 为 function (reducer) 的 key-value
  var finalReducerKeys = Object.keys(finalReducers);

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    // 每个子 reducer state 如果都没有发生变化, 父 reducer 就返回原 state
    // controller-view 监听可以优化性能

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
```
