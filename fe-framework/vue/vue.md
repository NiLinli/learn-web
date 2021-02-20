# Vue

- 运行时
- 编译器(编译 template) 类似于 jsx 语法糖的装换
  1. 没有使用 .vue 文件
  2. 使用了 template 而不是 render

## vue-cli

- chromedriver  `npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver`
- node-sass     `npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

## vuex 管理状态

vuex = redux + react-redux

- state     状态
- getter    获取计算后的状态
- mutation  同步 action
- action    异步 action
- module    模块化状态

## vue-router

## vue

新建 vue 实例

- new Vue 如果没有 template 和 render, 直接提取 html 中的结构作为模板
  
## component

- 每个组件必须只有一个根元素(react)
- props
- event
- slot (react-children)
- 动态组件 & 异步组件

组件之间通信

- 全局： event bus/vuex
- props/ref, event
- provide, inject
- attrs, listeners
