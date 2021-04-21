# 状态管理

- MV\*
- Flux
- mobx

## angular

- service
- NgRx(flux)

## vue/react

flux

## immutable

1. react
   - react 推荐更新 state 使用 immutable 方式, 更新 diff 阶段 immutable 只需要对比 reference, 而 mutable 需要遍历
   - 可以满足 PureComponent 的视图更新
2. redux
   - tracking mutation
   - maintaining state.

方式

- Object.freeze 定义 + shadowCopy 去修改
- immutable.js (结构共享 - 新旧数据共享子结构)
