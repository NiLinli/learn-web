# Oriented object programming

Object = 属性 + 方法(行为)
Class 创建 Object 的蓝图

- 封装: 数据 + 数据操作
- 继承
	- class: 继承公用的状态 + 方法
	- interface: 实现接口意味着遵守接口的合约
- 多态 polymorphism 英[ˌpɒlɪˈmɔːfɪzm]
	- 一个生物组织拥有多种状态/阶段, 一个对象可以有多种形态
	- 以 super 取代具体的 sub 作为参数或者返回类型, 可以传入任何有实现该接口的子类

## modifiers

static 类变量

- 静态变量会在任何对象创建之前初始化, 在任何静态方法执行之前初始化
- 静态方法不能调用非静态变量

final 最终形态

- final method 不能覆盖
- final class 不能继承
- static final 是常量

public   
protected 子类访问 & 实例不可访问  
private   子类不可访问 & 实例不可访问  

## interface

不需要在抽象的层次定义出细节，所需的只是个共同的合约定义，让细节在具体的子类实现。

默认修饰符, 可以省略

- fields: public static final
- method: public abstract

抽象类

- 无法被初始化: 没有 constructor
- 其他和类相同: modifiers 等
- 拥有抽象方法: 有抽象方法就一定是抽象类
- 用于被继承

## inheritance

- Super: Class or Interface
- Sub: Class 

继承时要通过Is-A测试(单向关系), 而不是Has-A

### Object

Object 没有 superclass
其他 class 都有并且唯一 superclass, 隐式的 Object 或者显式的 extends

### 多重继承

#### class state

不支持 multiple inheritance of state
多重继承状态混乱, 方法对状态的访问也很混乱

- method
- constructor

#### interface type

没有状态, 所以支持
multiple inheritance of type 类型的继承, 实现方法

## anonymous

代码简洁 不用声明多余的类名
声明 & 实例在同一时刻  
匿名类 基于父类去创建子匿名类  

Lambda expressions 匿名函数表达式

匿名类只有一个 method, 匿名类也不会很方便

将函数作为一个参数传递到另外一个参数 
适用 Lambda expressions 可以实现
Lambda expressions 表示表示为一个类, 右边的函数为类的唯一的函数

匿名了类 & 匿名了函数
