# project

## 编辑器

`.editorconfig`

## 预处理器

- scss
- ts

## lint 工具

- eslint
- tslint

## 工作流

husky

## 部署 deploy

持续集成 (CI): continuous integration
持续交付 (CD): continuous deploy

### travis

### jenkins

构建参数化: Build script 里面可以读取一些参数

[文档](https://jenkins.io/zh/doc/)

Pipeline

1. Jenkinsfile 放入工程中配置
2. step: 构建, 测试, 部署
3. step 是串行执行, 任何一个错误就是整个步骤错误

New Items

空项目
General
Source Code Management
Build Triggers
Build Environment
Build
Post-build Actions

流水线
General
Build Triggers
Advanced Project Options
Pipeline
