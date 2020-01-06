# 模块转化

ES Module

- cjs
- amd 
- umd

## 特性

- 模块的不同写法, 本身对于打包器就有一种意义, 打包出来的东西执行效果不同
- 模块转化的时候为了保证执行效果相同, 转换后还是保留了原 Module (即 ES Module) 的特性
  - export 值为引用
  - 标注了当前是 esModule

