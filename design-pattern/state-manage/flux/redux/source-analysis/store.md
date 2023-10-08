# store

## createStore

closure 维护状态和观察者 observer  
暴露一些方法

```js
export default function createStore(reducer, preloadedState, enhancer) {

  // reducer enhancer => reducer, preloadedState = undefined, enhancer
  // enhancer 只有唯一的 applyMiddleware
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(`Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }



  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];
  let nextListeners = currentListeners;
  let isDispatching = false;

  function getState() {}

  function subscribe(listener) {}

  function dispatch(action) {}

  function replaceReducer(nextReducer) {}

  function observable() {}

  // 初次调用 rootReducer 生成 currentState
  dispatch({ type: ActionTypes.INIT });

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable,
  };
}
```

## state

一个 store 只有一个 state

```js
function getState() {
  if (isDispatching) {
    // reducer 里面不要使用 store.getState()
    throw new Error('...');
  }
  // 保存的单一数据源
  return currentState;
}
```

## reducer

一个 store 只有一个 rootReducer

### 归并

- 一次 reducer 调用相对于 arr.reduce(reducer) 一次 callback 调用
- 程序执行中所有的 reducer 调用合并到 state 中, 等同于 arr.reduce 完成

### reducer function

pure function: (previousState, actionObject) => new State

```js
function user(state = {}, action) {
  // ... other handle
  default:
    return state;
}
```

### combineReducers

HOF

- argument: 子 reducers
- return value: combine reducer function(new rootReducer function)

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
