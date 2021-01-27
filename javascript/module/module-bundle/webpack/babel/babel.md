# babel

- [babeljs](https://www.babeljs.cn/)
- [babel-handbook](https://github.com/jamiebuilds/babel-handbook)

Babel 是一个编译器（输入源码 => 输出编译后的代码）
ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法

- 语法转换
- Polyfill (@babel/polyfill 模块，babel 7.4 已经抛弃)
- ...

编译过程

1. 解析
   1. 词法分析, 字符串形式的代码 -> tokens 流
   2. 语法分析, 令牌流 -> AST 形式
2. 转换
   - 遍历 AST, 对 Node 添加，更新，移除等操作
3. 输出
   - 操作后的 AST -> 新的代码, 同时创建源码映射(source map)

## 使用方式

- cli 使用
- nodejs 引用 babel-core 通过编程的方式

## 插件

### Visitors 访问者

访问一个节点的模式, visitor 是一个对象，定义了用于在一个树状结构中获取具体节点的方法

### 语法插件

### 解析插件

### plugins 配置/presets 配置

presets: 组合 plugin 和 presets

plugin: 从上到下
presets: 从下到上, 与 plugins 应用方向相反(这主要是为了确保向后兼容，由于大多数用户将 "es2015" 放在 "stage-0" 之前)

写法 plugin/presets

- `['babel-plugin-xxxxx', {}]` 完整写法
- `['babel-plugin-xxxxx']` 不写参数
- `'babel-plugin-xxxxx'` 连数组都可以去掉
- `'xxxxx'` 连 `babel-plugin-`/`babel-preset-`都可以去掉

### runtime

a library that contains:

1. Babel modular runtime helpers
2. a version of regenerator-runtime.
3. a version of core-js.

- @babel/runtime -> 1 + 2
- @babel/runtime-corejs2 -> 1 + 2 + 3
- @babel/runtime-corejs3 -> 1 + 2 + 3

@babel/plugin-transform-runtime 会根据 options 选择上述对应的 runtime 引用

作用:

1. babel 需要一些辅助函数去完成代码转换, runtime 提供这些模块化辅助函数, 如果不引入 runtime, 则每个文件单独生成一些辅助函数, 体积增大
2. 引入 corejs-pure 来 polyfill 文件, 不影响全局 polyfill

### babel polyfill

两种方式

1. env useBuiltIns
2. @babel/plugin-transform-runtime + @babel/runtime-corejs3

- 项目代码使用 env 中的 useBuiltIns 方式引入, 作用于项目代码(或与引入的 node_modules )
- npm package 使用 runtime 的方式引入 corejs-pure 保证 package 兼容性, 原因
  1. 引用 package 的工程不一定会使用 entry 方式引入 polyfill (不保证可以作用的到 npm package, 所以需要 polyfill)
  2. package 不能污染全局, 所以使用只能限定与 corejs-pure 的方式
