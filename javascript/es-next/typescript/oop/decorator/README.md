## 装饰器 Decorators

### 背景

类 python 语法, 给已有的 function 或者 class 扩展新的行为, 而不是修改本身

### 兼容性

JavaScript: stage 2 proposal (babel 使用 babel-plugin-transform-decorators-legacy 支持)  
TypeScript: experimental feature (开启 experimentalDecorators 配置)

### 装饰范围

classes and class members.

### 使用

1. 装饰器是一个函数
2. 装饰器接受需要装饰的目标
3. 对目标进行操作后返回目标
4. 其他地方引用目标时候会执行上述过程(runtime)

