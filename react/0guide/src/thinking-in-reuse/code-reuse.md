# 代码复用

- hooks
- HOC 设计模式, 而非 API
- render props 设计模式, 而非 API

## HOC

和高阶函数一样, 动态而非固定的函数的包裹(容器组件)

参数: 组件 + 复用逻辑自定义部分 callback
返回值: 组件
函数体: 复用逻辑 (没有副作用的纯函数)

1. 不会修改 WrappedComponent
2. 不会使用继承拷贝它的行为
3. 组合(composes) WrappedComponent, 通过用一个容器组件 包裹着(wrapping)原始组件

注意: WrappedComponent static method, 还有 ref 指向需要考虑

### 应用

Redux 的 connect

## render props

render prop 是一个用于告知组件需要渲染什么内容的函数 prop

1. 将 state 和处理逻辑封装在一起, 成为一个组件
2. 然后通过一个 props 传递一个 render 函数给这个组件
3. render 函数参数为 state, 返回值为特定组件

render prop 可以和 HOC 一起使用, 不过这样就嵌套两层
