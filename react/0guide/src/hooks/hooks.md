# hooks

不编写 class 的情况下, 函数组件里“钩入” class 组才有的特性

1. 使用 state
2. 以及相应的特性 生命周期等特性的函数

## 分类

- state hooks
- effect hooks 生命周期等副作用
- 自定义 hooks 重用状态逻辑 代替 高阶组件 + render props

## useState

单个 state 多个 state 之间找平衡

## useEffect

**渲染之后**角度考虑执行时机  
不再以挂载和更新角度去考虑执行世纪

- 需要清除的 effect
- 无需清除的 effect
