# mobx

多个 store
可变的 mutable

## 概念

- state
- derivations
  - computed (pure function 衍生值)
  - reactions (state 改变时候发生的副作用)
    - 用户界面 observer (mobx-react)
    - autorun
- actions 改变状态

### derivations

computed

- 有观察者才会计算
- 不被观察 Mobx 自动垃圾回收

autorun

- 没有观察者也会计算
- 需要手动垃圾清除(所以不要产生新的值)
