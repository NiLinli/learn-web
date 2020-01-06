# Module

## @angular/cdk

Component Dev Kit

`npm i @angular/cdk -S`

## i18n

## @angular/cli

全局的 Angular cli - 需要

多个工程使用不同的 angular/cli

1. 升级 global @angular/cli `npm install -g @angular/cli@6`  `ng -v` 查看全局的版本
2. 已经存在的版本使用本地的 angular/cli (the local Angular CLI version is used), 所以本来就不影响
3. 如果想创建老版本的新工程, 全局回退到之前的版本, 创建了之后, 再还原

## 多环境开发

## 不同模块分类

1. app.module 根 module
2. 特性模块
3. 带路由模块的特性模块(推荐)
  - 需要导入到 根模块中
4. 共享模块
  - 多个模块需要的话
  - 管道
  - 导出每个模块需要的模块(Form , Common, 第三方库)