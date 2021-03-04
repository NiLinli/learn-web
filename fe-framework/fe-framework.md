# 前端框架

## 视图更新

1. state

react 收集更新 state, setState 只是请求更新 **nextTick**
vue 不收集更新 state, 直接通过 setter 更新

2. state -> vdom

react 直接更新
vue 在该阶段收集 vdom update **nextTick**

3. vdom -> dom

一个 tick 只会导致 dom 只有一次更新
