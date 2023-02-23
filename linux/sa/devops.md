# devops

## 软件开发方法

- 瀑布开发: 反对变更, 周密计划, 变更需要重新走整个流程
- ...
- 敏捷开发: 拥抱变化, 快速迭代, 持续交付, 迭代中完善功能
  - Scrum
  - KanBan
- Devops: 敏捷开发 + pipeline CI/CD/CO + ... 

## devops

continuous 不断的提交  
拉取代码仓库开始  

### CI

integration 构建代码

- build
- test
- result

### CD

delivery 交付, 手动/自动去控制部署时机  
deploy 部署, 任何改动都**自动**部署到**生产环境**

- 程序包上传到服务器
- 部署运行

### C...

feedback 

cd 保证反馈得到及时更新, 快速修正

- 代码层面: CR
- 测试层面
- 用户数据埋点

improvement 学习提升技术  
operation 保持运营  


## jenkins

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
