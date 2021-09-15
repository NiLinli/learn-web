# dispatch

挂载在 `store.dispatch` 上

## store.dispatch

1. dispatch 调用 rootReducer
2. notify listeners

```js
  function dispatch(action) {
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }

    try {
      isDispatching = true
      // 触发 reducer 返回新的 state 状态
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    // notify subscribe 上面的 listener
    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }
```
