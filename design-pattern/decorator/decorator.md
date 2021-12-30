# decorator pattern

## 装饰

组合 decorator 的逻辑, **复用特性**, 达到改写方法

### 装饰者模式

方法

- origin class
- decorator class

过程: origin class + decorator class(复用) = 套娃执行 origin class

- 组合 decorator class 逻辑
- runtime 执行
- 灵活, 防止类💥

### ts 装饰器 @

类 方法 ...

- origin class
- decorator

过程: origin class + decorator(复用) = new class

- 组合 decorator 逻辑
- compile 生成 HOF
- runtime 执行 HOF 生成新的 class
- 会改变原始类, 所以不能防止类💥

## 注解

### ts 装饰器 @ 实现注解

decorator + metadata 可以添加元数据, 实现注解功能

### java 注解 @

和装饰器没有关系  
添加元数据(打记号)  
runtime 时候结合其他模式根据元数据操作  
