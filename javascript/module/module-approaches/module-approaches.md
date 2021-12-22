# 模块化规范

Abstract syntax tree (AST)

- module 规范
- 单个 js 文件都是一个模块(最佳实践)
- 模块包装器/模块分析打包器 执行

## UMD

Universal Module Definition = AMD + CommonJS + Global

[umd](https://github.com/umdjs/umd)

### CommonJs

- require
- module.exports/exports(快捷方式)

**动态引用, 无法静态分析**  
**导出的都是拷贝值，所以 immutable 变量是也拷贝值**

## ES/TS module

- import
- export

**静态分析**  
**由于静态分析所以变量肯定都是 reference**

### import()

动态导入

```js
// 引用方式类似于 cjs 中引用 esm
const { default: bar } = await import('bar');
```

## 静态分析

parse 成 AST 时候

- umd 无法判断依赖, 依赖可以是变量(运行时)
  - require('静态字符串') + plugin 也可以静态分析
  - 语义上来说 require 有特定的意义, 无法保证引用的第三方 require 都是静态字符串, 所以 plugin 无意义
- esm 依赖是固定的, 可以直接进行静态分析

## 副作用导入

执行模块代码(全局代码)

- `require('core-js')`
- `import 'core-js'`
