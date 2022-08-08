# composite 组合模式

对象树

## 组成

- 组件 Component: 描述了树中 Leaf 和 Composite 共有的操作
- 叶节点 Leaf: 树的基本结构, 不包含子项目, 简单元素
- 容器 Container/Composite: 子容器 + 子 Leaf, 收到操作请求后分发给子项目
- 客户 Client: 通过组件接口与所有项目交互

## 适用场景

- 实现树状结构
- 同一方式处理简单元素和复杂元素

优点：多态 + 递归, 满足开闭原则  
缺点：功能差异较大的 class, Component 难以设计, 为了满足 Component 接口会导致 class 难以理解