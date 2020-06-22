# Angular

## NgModule

**NgModule 是一个带有 @NgModule 装饰器的类**

NgModule 在代码层面上对 Component ...做了模块化区分, 特性模块, 共享模块, 主模块

- AppModule 根模块
  1. 引导引用启动的模块(组件, 或者路由模块)
  2. 全局声明 decalrations
  3. 全局 service
- ShareModule 共享模块
- FeatureModule 特性模块(业务模块)

模块对象

- declarations 指令(组件), 管道 这些只能声明在一个 Module 中
- import 引入模块, 可以使用被引用模块 exports 的内容
- providers 注册服务

## 工具

[stackblitz 在线编辑器](https://stackblitz.com/)  

https://stackblitz.com/github/ 替换 https://github.com/ 就可以直接运行

## 资料

[thoughtram Angular](https://blog.thoughtram.io/categories/angular-2/)
