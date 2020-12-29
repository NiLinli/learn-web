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

- class
- method(function)
- 属性
- 参数
- getter/setter

## 声明合并

编译器会将多个名字相同的声明会合并成一个声明
合并后的声明会拥有所有声明的特性

TypeScript中的声明会创建以下三种实体之一

- 命名空间 Namespace-creating declarations create a namespace, which contains names that are accessed using a dotted notation.
- 类型 Type-creating declarations do just that: they create a type that is visible with the declared shape and bound to the given name.
- 值 value-creating declarations create values that are visible in the output JavaScript.
