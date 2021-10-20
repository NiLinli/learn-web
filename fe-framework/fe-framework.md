# 前端框架

## 响应式原理

分为两个部分考虑

### 组件更新

render 函数执行

Component => vdom

优化点

- render 函数执行时机
  - state 变更合并
- render vdom 过程

### 视图更新

vdom => 真实 DOM

优化点

差量更新 vdom 到 真实 DOM
