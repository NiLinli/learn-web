# Observer pattern

Subject 与 Observer 只见是**松耦合**, Subject 不需要关心 Observer 实现了什么细节

## observer pattern

- Subject: interface or super class
- Observer: interface
- ConcreteSubject
- ConcreteObserver

Subject 使用 super class 实现可以将维护 Observer 的代码统一实现  
如果 ConcreteSubject 想要继承其他超类就会有冲突

## Publish/Subscribe Pattern

1. 添加了 topic/event  
2. 更方便的 unsubscribe 监听

### EventEmitter

observer pattern 简化与添加了 Pub/Sub 特性

- Subject 改名为 EventEmitter, 使用超类实现逻辑
- ConcreteObserver 直接使用 update 函数所取代
