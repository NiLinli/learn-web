# flux

managing data flow pattern, 不是具体的 framework

## 组成部分

ADSV  
Action --> Dispatcher --> Store --> View
数据和逻辑永远单向流动

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
一个 store 只有一个 state, 但是一个 APP 可以创建多个 store

### view

- view 通过 controller-view 获取(getter) state(store)
- 监听 store change 事件

## 具体实现

实现和传统的 FLUX 定义有所出入, redux 最接近 Flux 模式

### redux

单一数据源 + 不可变

store 组织

- action
- dispatch
- store
  - reducer 
  - state

dispatch 挂载在 store 上面

### vuex

单一数据源 + 响应式

store 组织

- action(action thunk)
- dispatch
- store 
  - mutation
  - state

action & dispatch 挂载在 store 上面

### mobx

store => Observable
多个 Observable, 不是单一数据源 + 响应式

- Observable
  - State
  - Actions
  - Derivations(派生)
    - Computed values
    - Reactions => side effect
    - ...
