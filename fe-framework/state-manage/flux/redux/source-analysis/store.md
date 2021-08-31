# store

## createStore

closure 维护状态和观察者 observer  
暴露一些方法  

```js
export default function createStore(reducer, preloadedState, enhancer) {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []
  let nextListeners = currentListeners
  let isDispatching = false

  function getState() {}

  function subscribe(listener) {}

  function dispatch(action) {}

  function replaceReducer(nextReducer) {}

  function observable() {}

  dispatch({ type: ActionTypes.INIT })

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable,
  }
}

```

## state

```js
function getState() {
  if (isDispatching) {
    throw new Error(
      'You may not call store.getState() while the reducer is executing. ' +
        'The reducer has already received the state as an argument. ' +
        'Pass it down from the top reducer instead of reading it from the store.'
    )
  }
  // 保存的单一数据源
  return currentState
}
```

## reducer

归并思想

- reducer 相当于 arr.reduce(reducer) 中的 callback
- 多个小的对 state 的更新多次合并到 state 中

```js
// 传入 state 和 actionObject
function todos(state = [], action) {
  // ... other handle
  default:
    return state;
}
```

dispatch 调用 root reducer 返回 state => 更新 state

### combineReducers

1. 传递子 reducers
2. 返回一个新的 combine reducer function, combine function 中调用子 reducers

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

    // 子 state 都没有变化, 父 state 也不会发生变化
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
```
