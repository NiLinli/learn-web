# flux

Flux is a pattern for managing data flow in your application.

- unidirectional data flow
- a pattern rather than a formal framework

## 组成部分

- action
- dispatcher: 分发事件 (发送事件)
  - receives actions
  - dispatches them to stores that have registered with the dispatcher.
  - every store will receive every action.
  - only one singleton dispatcher in each application.
- store
  - holds the data of an application
  - The data in a store must only be mutated by responding to an action.
  - Stores will register with the application's dispatcher so that they can receive actions.
  - Every time a store's data changes it must emit a "change" event
- view (React, Angular, Vue)
  - view uses data from a store
  - subscribe to "change" events from that store

controller-view:

1. 连接 view 与 store
2. 必须要有一个组件去订阅 store 的变化, 类似于 container component
3. 顶层 view

## 数据流向

ADSV (Action --> Dispatcher --> Store --> View), 数据和逻辑永远单向流动

## view

容器组件解决了数据请求逻辑的问题, 没有解耦出业务逻辑

数据请求 + 业务逻辑

- 容器组件 container component
    - 含有抽象数据
    - 没有业务逻辑
- 展示型组件 presentational component
    - 没有数据请求逻辑
    - 只有业务逻辑

## 具体实现

### redux

1. 单一数据源 -- 一个应用只有唯一一个数据源
2. 状态是只读的 -- reducer 迭代 当前 state
3. 状态修改均有 pure function 完成

### mobx
