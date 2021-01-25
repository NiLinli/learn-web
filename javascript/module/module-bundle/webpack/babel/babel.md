# babel

Babel 是一个编译器（输入源码 => 输出编译后的代码） 
ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法

- 语法转换
- Polyfill (@babel/polyfill 模块)
- ...

编译过程

1. 解析
2. 转换
3. 输出


## 插件

### 语法插件

### 解析插件

### plugins 配置/presets 配置

presets: 组合 plugin 和 presets

plugin: 从上到下
presets: 从下到上, 与 plugins 应用方向相反(这主要是为了确保向后兼容，由于大多数用户将 "es2015" 放在 "stage-0" 之前)

写法 plugin/presets

- `['babel-plugin-xxxxx', {}]` 完整写法
- `['babel-plugin-xxxxx']`     不写参数
- `'babel-plugin-xxxxx'`       连数组都可以去掉
- `'xxxxx'`                    连 `babel-plugin-`/`babel-preset-`都可以去掉


### 

