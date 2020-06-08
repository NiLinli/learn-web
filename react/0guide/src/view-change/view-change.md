# 视图刷新

1. 触发执行 render 函数(React 更新机制)
2. 更新 DOM 操作(直接操作)

## render 函数

两种方式更新 view

- setState
- forceUpdate

1. 默认刷新 当前 节点 以及所有的子节点, 执行 render 函数, **并非从 root 节点开始更新**
2. 执行 render 函数返回的结果和 现有 DOM 进行对比 , 看是否刷新 DOM (diff 算法, key)
3. forceUpdate 会跳过 shouldComponentUpdate , 直接执行 render, 仅此而已, 不影响子节点的生命周期和更新机制
4. shouldComponentUpdate return false, 会阻止当前节点以及子节点视图更新

## 生命周期钩子

副作用

## reconcliation 协调

virtual dom -> 真实 dom 的过程叫 协调

1. Node 上面的type类型发生改变 直接销毁重新构建
2. 相同类型的 DOM 元素, 更新 Property
3. 组件更新 componentWillReceiveProps -- componentWillUpdate -- render
4. rescurse 子节点 (添加 key 去高效查找 list)
    - id
    - 数据内容创建 Hash 值
    - 数组 index (尽量不要使用 , arr 重排会导致没有什么意义, 所以还是不要使用)
    - key 必须是稳定的唯一的
