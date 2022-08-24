# 设计模式

意义:

1. 一个可复用的解决方案
2. 花较少的时间重复代码
3. 多让程序做有趣的事情

软件经过一段事件后, 需要设计与改变, 不然会走向灭亡 (后期维护 大于 前期开发)  

优秀的软件设计通常会将关注点进行分离， 而这往往会导致软件的分层。 

## 设计原则

找出应用中可能需要的变化之处, 独立出来

### CARP 组合/聚合复用原则

Composite/Aggregate Reuse Principle
多用对象组合, 少用类继承

### SRP 单一职责

### OCP 开闭原则

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

### LSP 里氏替换

### ISP 接口隔离

### DIP 依赖反转

针对接口编程，而不是针对实现编程 

### Law Of Demeter 迪米特法则

Last Knowledge 最少知识

## OO 设计模式

[design-patterns](https://refactoringguru.cn/design-patterns#intro-patterns)

### UML 类图

- Class
    - `+` public
    - `-` private
    - `#` protect
- Class Relationships
    - Inheritance 
        - 继承 extends
        - SubClass **is a** SuperClass
        - 实线 三角形
    - Realization 
        - 实现 implements 
        - 虚线 三角形
    - Association
        - 关联
        - 一对多/多对一/多对多
    - Aggregation (Association subsets)
        - 聚合 一部分
        - SubClass **is a part of** SuperClass
        - 生命周期不同 黑色空心方片
    - Composition (Aggregation subsets)
        - 组成/构成 一部分
        - SubClass **is is a part of** SuperClass
        - 生命周期相同 黑色实心方片
    - Dependency (Association subsets)
        - 依赖 use
        - 在方法代码中使用另外一个类, 但是没有存那个类



### 创建型

解耦对象的创建和使用, 使之分离 

- Factory Method (工厂方法) ✅
- Abstract Factory (抽象工厂) ✅
- Prototype (原型) ✅
- Singleton (单例) ✅
- Builder (生成器/建造器) ✅

### 结构型

类/对象按照某种布局形成更大的结构

类结构型: 继承 (Adapter)
对象结构性: 组合(灵活) 将工作委派给其他对象

加一层, 解除耦合

- Decorator (装饰器) ✅
- Composite (组合) ✅
- Bridge (桥接) ✅
- Facade (外观) ✅
- Flyweight (享元) ✅
- Adapter (适配) ✅
- Proxy (代理) ✅

### 行为型

程序运行**流程控制**  
多个 class/object 之间协同完成单个对象无法完成的任务  
算法 + 职责分配  
类结构型: 继承  
对象结构性: 组合(灵活)  

- Template Method (模板方法) ✅
- Strategy (策略) ✅
- Command (命令) ✅
- Chain of Responsibility (职责链) ✅
    - Middleware (中间件) ✅
- State (状态) ✅
- Memento (备忘录) ✅
- Interpreter (解释器)
- Iterator (迭代器) ✅
- Mediator (中介者) ✅
- Observer (观察者) ✅
- Visitor (访问者)

## 其他设计模式

- Mixin (混入)
- Monkey Patch (猴子补丁)
- Inversion Of Control (控制反转)
