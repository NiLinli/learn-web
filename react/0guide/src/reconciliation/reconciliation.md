# reconcliation

1. Node 上面的type类型发生改变 直接销毁重新构建
2. 相同类型的 DOM 元素, 更新 Property
3. 组件更新 componentWillReceiveProps -- componentWillUpdate -- render
4. rescurse 子节点 (添加 key 去高效查找 list)
    - id
    - 数据内容创建 Hash 值
    - 数组 index (尽量不要使用 , arr 重排会导致没有什么意义, 所以还是不要使用)
    - key 必须是稳定的唯一的