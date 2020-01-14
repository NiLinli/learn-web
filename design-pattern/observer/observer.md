# Observer pattern 
> One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves.   
From Design Patterns: Elements of Reusable Object-Oriented Software

## The observer pattern
- Subject(super class): 维护 observer 列表, 添加或者删除 observers
- Observer(interface): 当 Subject 状态改变时, 为需要更新的对象提供一个更新的接口 
- ConcreteSubject: 状态改变时候, 发送通知给 observers , 并且存储 ConcreteObservers 的状态
- ConcreteObserver: 存储对 ConcreteSubject 的引用变量, 实现 Observer 中的更新接口, 使 Observer 与 Subject 的状态保持一致 

1. subject 中注册了很多 observers （ observers 拥有 update 之类的方法 ）
2. subject 通知 observer(s) 就是直接调用 observer(s) 中的 update 方法


## Publish/Subscribe Pattern
- publisher : subject 变种, 主要发布事件
- event 记录每个事件上的 subscriber , publisher 发布事件的时候, 可以找到每一个 subscriber (调用subcriber 中的 func 去触发事件的 callback)
- subscriber: Observer 变种, 订阅事件, 实际触发事件callback

1. subscriber 和 publisher 之间去掉了依赖性
2. Publish/Subscribe 模式在 es 中使用没有违和感, 因为自身 API 就是 event drive
4. ES没有提供自定义事件 API（DOM3）, 基本没有怎么使用, 一般使用 jQuery 等第三发库实现的 publish/subscribe

### 区别
1. publisher 和 subscriber 并不是直接联系, 而是通过 event 来联系 (event 为中介, 记录对应关系)
2. Subject 和 observer 时直接相关的, subject 直接通知 observer 来保持状态一致 (subject 直接记录)



