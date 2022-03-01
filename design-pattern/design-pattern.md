# 设计模式

意义:

1. 一个可复用的解决方案
2. 花较少的时间重复代码
3. 多让程序做有趣的事情

软件经过一段事件后, 需要设计与改变, 不然会走向灭亡 (后期维护 大于 前期开发)

## 设计原则

### 开闭原则

对扩展开放, 对修改关闭

设计原则是尽量达到, 而不是一定需要达到

- 找出代码中可能会发生改变的地方, 独立出来, 避免与不需要发生变化的代码混在一起 (系统改变某一部分不会影响其他部分)
- 针对接口 interface (超类型 supertype)编程, 而不是针对实现编程(new )
- 多用组合, 少用继承

注: 实现一个接口 **泛指** 某种超类型(class or interface) 的某个方法

- 依赖倒置(dependency inversion): 要依赖抽象, 不要依赖具体 class
    -  不能让高层组件依赖低层组件
    -  不论高层还是底层, 都应该依赖于抽象
    -  不违反依赖倒置原
        + 变量不可持有具体 class 的引用 例如 `const p = new Person()`(工厂可以用来避开这个问题)
        + 不要让类 extends 具体类 (这样会依赖具体类, 应该 extends 抽象类和接口)
        + 不要覆盖基类中已经实现的方法 (如果必须要覆盖, 应该思考基类是否合适被 extends)


## 设计模式类别

### 创建型

创建对象

- Factory Method (工厂方法)
- Abstract Factory (抽象工厂)
- Prototype (原型)
- Singleton (单例)
- Builder (生成器/建造器)

### 结构型

- Decorator (装饰器)
- Mixin (混入)
- Facade (外观)
- Flyweight (享元)
- Adapter (适配器)
- Proxy (代理)

### 行为设计模式

- Iterator
- Mediator
- Observer (观察者)
- Visitor (访问者)
