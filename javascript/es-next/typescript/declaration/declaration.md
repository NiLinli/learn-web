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