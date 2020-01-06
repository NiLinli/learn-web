# 视图刷新

1. 执行 render 函数
2. 更新 DOM 操作

## render 函数

改变 state , 默认刷新 当前 节点 以及所有的子节点, 执行 render 函数, **并非从 root 节点开始更新**

执行 render 函数返回的结果和 现有 DOM 进行对比 , 看是否刷新 DOM

1. 没有改变 state , 需要执行 render => forceUpdate
   - forceUpdate 跳过 shouldComponentUpdate , 直接执行 render ,
   - 子节点依然按照正常的生命周期, 不会跳过 shouldComponentUpdate 方法
2. DOM 对比不是想要的结果