# declaration

ts = d.ts + js  
ts 文件 consume js, 需要 d.ts 补全 js 代码中的类型

## 声明

like c .h header file

- runtime 消费 js  
- ts 中的 type declaration 消费 type 定义(ts 消费只会看有没有定义, 不会看有没有源文件)

## 模块

文件

- 全局模块
- 文件模块(有 export import)

模块声明来源

- ts 模块化(文件模块)
- js 文件
  - 文件模块: 对应的 d.ts 文件(找不到 ts 文件, 会默认去找 d.ts 文件)
  - 全局模块 declare module 'xxx'
    - npm 包中 package.json 中 typings/types 字段定义
    - @types/xxx 中定义

## 预处理查找范围

file include exclude 组合选中的文件集合

在初始检查器的时候

- 全局声明会被合并
- 模块中的声明也会被定义

## 相关配置

- typeRoots 
- types  

全局加载定义, 如果不加载, 只影响全局的引用方式  
使用 import 会自动引入, 不受这里管理  
默认导入 @types 下所有的, 没必要, 应该导入需要全局引入的 package  
查找方式为

1. node_modules/@types/...
2. node_modules/...   文档未明确说明

- lib
- target

导入一些常见的环境库 DOM Node 等

## 三斜线指令

预处理来解析所有三斜线引用指令

- types
- lib
- path

typescript-eslint 推荐 import 代替三斜线
import 会导致一些全局声明失效, 需要 declare global

## 声明合并

编译器会将多个名字相同的声明会合并成一个声明
合并后的声明会拥有所有声明的特性

TypeScript中的声明会创建以下三种实体之一

- 命名空间 Namespace-creating declarations create a namespace, which contains names that are accessed using a dotted notation.
- 类型 Type-creating declarations do just that: they create a type that is visible with the declared shape and bound to the given name.
- 值 value-creating declarations create values that are visible in the output JavaScript.

## 模块

比如变量，函数，类，类型别名或接口

别名

- `export { A as B }`
- `import { B as A }`

全部

- `export * from 'module'` 导入 + 导出(重新导出)/导出转发
- `import * as All from 'module'` 导入

默认导出

- `export default`
- `import A from 'module'`

支持 commonjs 的 exports 对象

- `export = A`  这里和 exports = A 有区别, cjs 代码不能改变 exports 指针的指向
- `import A from 'A'`


