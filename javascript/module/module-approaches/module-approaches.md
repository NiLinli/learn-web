# 模块化规范

Abstract syntax tree (AST)

- module 规范
- 单个 js 文件都是一个模块(最佳实践)
- 模块包装器/模块分析打包器 执行

## UMD

Universal Module Definition = AMD + CommonJS + Global

[umd](https://github.com/umdjs/umd)

## CommonJs

- require
- module.exports/exports(快捷方式)

**动态引用, 无法静态分析**  
**导出的都是拷贝值，所以 immutable 变量是也拷贝值**

### module 包装

模块内的变量是私有的, 模块被 Node 封装在一个函数中(函数作用域)

```javascript
(function(exports, require, module, __filename, __dirname) {
    // 模块的代码实际上在这里
});
```

- exports
  - `module.exports` alias
- require
  - 模块引入相关特性
  - `require()`
  - `require.main === module` 记录是不是主模块, 运行入口模块
  - `require.cache`
  - `require.extensions`
      1. 提示怎样处理扩展名( function handler)
      2. 可以使用, 但是已经被废弃
      3. 应该把其他语言编译成 js 再去加载
  - `require.resolve()`
  - `require.resolve.paths()`
- module
  - 当前模块的相关信息
  - `module.exports`
  - `module.children` 引用的子模块
  - `module.paths` 此模块搜索其他模块的路径
- __filename
- __dirname

### 缓存

1. 第一次加载后会被缓存
2. 多次引用也不会重新执行, 只是会返回 exports 对象(完成/未完成)

### 循环引用

a->b->a

1. 模块已经被引用过, 缓存, 不会重新执行
2. 循环引用, 返回未完成的 exports 对象副本

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
