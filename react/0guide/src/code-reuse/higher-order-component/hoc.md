# HOC

接受参数, 把组合结果写成函数返回值

实现代码复用

mixin 给组件添加 props 或者是属性

高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
`const EnhancedComponent = higherOrderComponent(WrappedComponent);`

普通组件: props -> React Element
高阶组件: 一个组件 -> 另外一个组件

HOC 模式: 解决组件复用(组件是代码复用的主要单元)

## 模式

高阶组件(没有副作用的纯函数)

1. 不会修改 WrappedComponent
2. 不会使用继承拷贝它的行为
3. 组合(composes) WrappedComponent, 通过用一个容器组件 包裹着(wrapping)原始组件

## 应用

Redux 的 connect