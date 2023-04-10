# css & js

## css preprocessor

预处理器阶段

- scss-loader
- less-loader

## webpack loader css

webpack loader 处理 css  
只是文件的处理, 写在 js 当中, 但是和 js 没有什么关系

- style-loader + css-loader => style 标签
- style-loader + file-loader => link 标签
- mini-css-extract-plugin/extract-text-webpack-plugin + css-loader => link 标签

## postcss

插件系统

可以让 css 支持一些新的特性 类似于 js 之余 babel

## css scoped

让 css 拥有作用域

vue 

- postcss 处理 css 添加 attribute selector
- vue template 添加 attribute

## css module

借助于各种 module pack 工具, 对其支持 css module 特性  

- 模块化(作用域)
- js module 可以引入 css module
- :export {} 导出变量

思路

1. 建立 css & js 映射 hash
2. 改变 css 样式类名 
3. 替换 js 中类名

相比 css scoped 人为添加 attribute selector, 性能更好  

注

RN 等没有 css 概念的平台, 也是使用类型的写法, 只是实现原理不同

## css in js

css 在 js 中以编写组件的方式存在  
组件 + 样式 => 新的组件(Styled Component)

思路

- 生成新的组件将样式通过 style 挂载上去
- 因为是组件, 所以支持 props 传递实现动态样式
- ...

一般 scoped/module 的样式都是特定的样式, 用 styled component 方式替代, 不存在多处使用的问题  
全局的样式还是写在普通的 css 当中  

