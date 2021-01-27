# polyfill

## core-js

Modular standard library for JavaScript.

### 版本割裂

- @2 已经没有维护了
- @3 新特性都添加到该版本

### 引用方式(模块化)

- ES Module
- CommonJS
- Global(通过 webpack 编译成 umd 方式输出)

### polyfill 方式

- global namespace pollution(改写 prototype)
- without global namespace pollution(引用 core 变量)

### 源代码分析

[corejs2](https://github.com/zloirock/core-js/tree/v2.6.12)

- module: 具体实现
- es5/es6/.../stage...: feature 对 module 引用的组合
- library: 使用引用的方式, 而不是修改 prototype
- fn: 单个函数的垫片
- library/fn: 单个函数的引用
- client: webpack 打包成 umd 的输出

[corejs3](https://github.com/zloirock/core-js)

- modules: 具体实现
- feature: 按照类型进行组合, 不再区分 es5, es6 等等, 包含 es + web 内容
- es: es feature 组合
- web: web feature 组合
- stable: es + web feature
- proposals: 提案
- core-js-pure: 同 library, 独立 npm 包
- 无 fn, 直接在 feature 里面引用即可
- core-js-bundle: 同 client, 独立 npm 包

corejs2 和 core3 最大的变化是 feature 的细分程度, **corejs3 是按照类进行区分的, 便于组合**

### core-js 与 babel

1. babel-preset-env
2. @babel/plugin-transform-runtime
    - @babel/runtime-corejs2
    - @babel/runtime-corejs3
