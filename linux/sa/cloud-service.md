# 云架构

- Infrastructure as a Service -> IaaS (资源 CVM...)
- Platform as a Service -> PaaS (应用的生命周期管理 TCS, TKE...)
  - Backend as a Service -> BaaS  (比较单一的基础服务 分布式Mysql, MQ, Redis...)
- Software as a Service -> SaaS (可以提供业务的产品 部署有的提供私有化, 埋点平台...)
- Function as a Service -> FaaS (计算平台, 使用会创建计算资源, 资源维度在函数调用维度 云函数...)

## Serverless

无服务器是指不需要关注服务器资源  

FaaS + BaaS

- 按需加载
- 事件驱动
- 没有特定的服务器, 无法在服务器状态实例化
- 无状态, 无法会话保持
