# typescript

typescript 编译 (编译不通过的两个地方)

1. tsconfig
    - 此文件表示为项目的根目录
    - 编译选项
2. tslint(eslint代替) 代码规则检查

## type and interface

- interface 接口 (定义类型 + oo 中的 implement)
- type 类型别名 (定义类型 + 类型运算)

### 定义类型

- 函数
- 对象实例

### 不同点

- implement
- 类型运算: 除函数和对象之外的其他类型, 就是写在变量声明后面的类型都可以用 type 表示

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

## 声明合并

编译器会将多个名字相同的声明会合并成一个声明
合并后的声明会拥有所有声明的特性

TypeScript中的声明会创建以下三种实体之一

- 命名空间 Namespace-creating declarations create a namespace, which contains names that are accessed using a dotted notation.
- 类型 Type-creating declarations do just that: they create a type that is visible with the declared shape and bound to the given name.
- 值 value-creating declarations create values that are visible in the output JavaScript.
