# action

- actionObject 传入 reducer 中的参数
- actionCreator 创建 actionObject 的函数
- bindActionCreator 绑定 actionCreator 和 dispatch

```js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
```
