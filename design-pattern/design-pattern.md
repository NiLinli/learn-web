# 设计模式

意义:

1. 一个可复用的解决方案
2. 花较少的时间重复代码
3. 多让程序做有趣的事情

软件经过一段事件后, 需要设计与改变, 不然会走向灭亡 (后期维护 大于 前期开发)

## 设计原则

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


## Strategy 策略模式

## Factory 工厂模式

封装对象的创建

### 简单工厂

简单工厂不是设计模式, 是一种编程习惯。

1. 将代码中直接使用 `new` 的部分 **抽离** 出来
    - 会在将来发生变化
    - 运行时候决定的(多态)
2. 建立一个新的工厂对象, 对象上有个一个 动态创建所需对象的方法, 工厂处理创建所需对象的细节

替代简单工厂 -> 静态方法 -> 缺点: 不能使用继承来改变创建方法的行为

### 工厂方法模式

思考过程:

1. 由一个对象负责所有具体类的实例化 -> 子类的方法负责实例化 `abstract Product factoryMethod(type)`
2. 这样做可以让子类决定创建的对象是什么

特点:

1. 定义了一个创建对象的接口
2. 由子类决定要实例化的类
3. 实例化实例化推迟到了子类

与简单工厂的区别:

- 简单工厂     -> 一个 factory 对象去处理所需对象的创建
- 工厂方法模式  -> 创建一个框架, 让子类决定如何实现 

### 抽象工厂模式

使用对象的组合

1. 提供一个接口
2. 创建相关或依赖对象的家族
3. 不需要指明具体 class

## 设计模式类别

1. 创建型设计模式
    + Constructor
    + Factory
    + Abstract
    + Prototype
    + Singleton
    + Builder (生成器)
2. 结构型设计模式
    + Decorator (装饰器)
    + Mixin (混入)
    + Facade (外观)
    + Flyweight (享元)
    + Adapter (适配器)
    + Proxy (代理)
3. 行为设计模式 
    + Iterator
    + Mediator
    + Observer (观察者)
    + Visitor (访问者)




