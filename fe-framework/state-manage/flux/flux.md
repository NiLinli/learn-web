# flux

managing data flow pattern, 不是具体的 framework

ADSV  
Action --> Dispatcher --> Store --> View
数据和逻辑永远单向流动

## MV*

Model --> View
View  -直接修改-> Model

多个 Model View 互相修改, 导致数据流很乱  
通过限制 View 直接修改 Model, 而是通过全局的 dispatcher 分发 action 去修改 Model, 让数据流更加清晰

## 组成部分

### action

一个简单的对象, 通过 action create 创建

```js
{
  type: 'omg',  // 约定俗成的保留字段
  payload: {}
}
```

### dispatcher

全局单例

1. 接受 actions
2. 分发 action 到并通知 store(已在 dispatcher 上注册)

### store

在 dispatcher 上面注册

- 记录 state
- 接受 action, 更新 state **具体框架具体实现**
- 对外发送 state(store) change 事件

state(store) 只能通过 action 来改变, 没有 setter API

### view

- view 通过 controller-view 获取(getter) state(store)
- 监听 store change 事件

## 具体实现

### redux

单一数据源

store 组织

- state
- reducer: pure function 改变 state
- dispatch(): 调用 dispatcher 分发 action

### vuex

单一数据源

store 组织

- state
- mutation: commit 改变 state
- dispatch(): 调用 dispatcher 分发 action
  - action 也注册在 store 中方便引用分发
