# react redux

## Provider

1. 创建 context
2. 创建 Provider
3. 订阅 store 更新, 并触发 subscription 中的更新

value

```js
{
  store: store,
  subscription: subscription  // 创建 sub, 给 connect 创建的 HOC 订阅
};
```

## connect

返回 HOC, HOC 维护 state (和传递进 mapStateToProps 参数一样)

订阅 subscription, 接受更新, setState({ state: store.getState() })  -> 更新 HOC component
mapStateToProps(state, ownProps) 生成 Props 更新, wrapperedComponent 更新
