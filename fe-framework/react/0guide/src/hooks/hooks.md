# hooks

hooks is a **function**

class 是对 react 介入执行流程的抽象  
hooks 是对 react 执行流程的另外一种访问与介入  
设计思想: 不编写 class 的情况下, 函数组件里 “钩入” class 组才有的特性

1. state
2. effect(类比生命周期)
3. other hooks
4. 复用: 组合 state effect function 等

注意: React 记录 Hooks 对应的状态是依照 hooks 的顺序(只在函数顶层调用 Hooks, 不要在条件判断中调用)

## useState

单个 state 多个 state 之间找平衡

## useEffect

**渲染**角度考虑执行时机  
不再以挂载和更新角度去考虑执行世纪

- 需要清除的 effect
- 无需清除的 effect

## useCallback

代替 class 中的方法

## 自定义 Hooks

- 只是将两个函数之间一些共同的代码提取到单独的函数中
- 自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性
