## Observable
Observable 是 Iterator(pull) 和 Observer(push) 两种设计模式的结合。

Observable 的订阅 跟 addEventListener 不一样
- Observable 的订阅 -> 订阅一個 Observable 是执行一个 function
- addEventListener -> Observer Pattern 的实际使用


## 创建Observable
- `Observable.create(fn:(observer) => any)`
- create operator


## Observable 和 Array 的 区别
1. 延迟运算: 订阅后才运算
2. 渐进式取值


## Observable 特点
1. Observable 与 Observer Pattern 是不同的(唯一的关联可能就是, 订阅的时候直接 notify 观察者 )
2. subscribe 就是将传入的 observer.next() 方法执行
3. 需要返回取消订阅, 也就是停止执行 observer.next() 这个方法