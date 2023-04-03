# decorator 相关

- 设计模式 装饰器模式
- 语言特性 装饰器

## 装饰者模式

组合 decorator 的逻辑, **复用特性**  
组合(composition) 和 委托(delegation) 运行时达到继承的效果  
动态将责任附加在对象上, 比静态继承更有弹性  

wrap object

方法

- origin class
- decorator class

过程: origin class + decorator class(复用) = 套娃执行 origin class

- 新建时候组合 decorator class 逻辑
- runtime 执行(委托)
- 灵活, 防止类💥

## 装饰器

和装饰者模式没有任何关系  

wrap class

- origin class
- decorator

过程: origin class + decorator(复用) = new class

- **组合 decorator 逻辑**
- compile 生成 HOF
- runtime 执行 HOF 生成新的 class
- 会生成新的 class, 可以使用匿名 class 防止类💥

### 注解

类似于装饰器写法, 但是和装饰器没有任何关系, 单纯给 class 打标记  

#### ts 装饰器 @ 实现注解

decorator + metadata 可以添加元数据, 实现注解功能

#### java 注解 @

和装饰器没有关系  
添加元数据(打记号)  
runtime 时候结合其他模式根据元数据操作  
