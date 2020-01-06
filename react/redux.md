# redux

redux 思想

- 单一数据源 state (JSON 描述), 不能直接通过赋值修改 state
- 修改 state 通过
   1. 发起 action (强制使用 action 来描述所有变化, 使得过程更加清晰)
   2. reducer 接受 action + old_state => new_state
   3. reducer 可以被拆分成小的 reducer

原则(由思想导出)

- 单一数据源
- State 是只读的
- 使用纯函数来执行修改 (reducer 为纯函数)

## redux 过程

1. 调用 store.dispatch(action) 分发 action
2. 子 reducer 响应 action , 返回新的 state
3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树, combineReducers()
4. Redux store 保存了根 reducer 返回的完整 state 树

- Provider 作为顶层 App 的分发点, state 分发给 connect 的组件, 不考虑嵌套层数
- connect 柯里化函数
  - mapStateToProps 绑定一个函数, 参数是 state , 简单返回你关心的几个值
  - mapDispatchToProps

顶层分发状态, React 被动的渲染
监听事件

## container

- components
  - props 数据来源
  - 响应 props 的变化
- containers
  - 监听 redux state 变化
  - 链接 components 和 redux (作为 bridge)

响应 action -> reducer 出新的 state -> container 组件监听变化 `store.subscribe()`(理论上)
-> 改变 container state(即 components props) -> components props 变化, 更新 UI 等

1. container 绑定 components (`const container = connect(func1, func2)(components)`)
2. container 放入 App 根组件中
3. 把 store 传入每一个 container 中, 使用 `<Provider />`  替代每一个传入
4. action -> reducer (更新 state) -> container 监听 state 变化 (读取 state , 编写 component 的业务逻辑)

## react-redux

1. configureStore()  store 与 reducer 关联
2. `<Provider />`    store 与 container 关联

## redux 项目结构

- Ducks reducer: 和 action 放在一个集合里面
- Rails-style: 经典划分
  - actions + constants
  - reducers
  - containers
  - components

1. 按照 feature 划分

## 业务逻辑

reducer 和 action 之中

flat action

- 用于更新 state 的 action 对象就会变得 fat
- 相应的 reducer 就变得纯净简洁, 因为只涉及很少的业务逻辑，将非常有利于组合

thin action

- action 将变得精简、美观，大部分数据逻辑都在一个地方维护
- 但是 reducer 由于引用了其它分支的信息，将很难组合
- 最终的 reducer 会很庞大，而且需要从更高层的 state 获取额外信息

权衡

## 数据处理

api 请求回的 JSON 数据进行处理, 更新到 store 中

normalizr

## 数据持久化

读

时机: 程序运行开始
方式: 读取 storage 中的存储的内容到内存中

写

时机: 程序运行中
方式: 内存中的内容只要更新, 就会写到 storage 中

reconcilers 调解人 -->  State reconcilers define how incoming state is merged in with initial state.

- hardSet  新状态直接覆盖老状态
- autoMergeLevel1
- autoMergeLevel2