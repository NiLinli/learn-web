# API design

名词解释

- RPC: Remote Procedure Call
- SOAP: Simple Object Access Protocol
- ROA: Resource-Oriented Architecture

安全控制

1. HTTP 请求都经过代理服务器 (Proxy Server)
2. 代理服务器制定安全策略
   - 所有经过该代理的访问 User 和 User List 资源的请求只具有读取权限，即：允许 GET/HEAD 操作
   - 而像具有写权限的 POST/PUT/DELTE 是不被允许的

## SOAP

xml
定义自己个性化的接口方法来抽象 Web 服务
安全控制: 代理服务器必须解码 soap 消息, 即 xml 文档进行信息过滤 , 代理服务器与 soap 服务其紧耦合

## ROA - RESTful

ROA 是一种把实际问题转换成 REST 式 Web 服务的方法
它使得 URI、HTTP 和 XML 具有跟其他 Web 应用一样的工作方式

真实的应用需求  转化成  ROA 中的资源

安全控制: 代理服务器根据 HTTP method 过滤

分布式系统:

分布式事务

幂等性 N 次变换与 1次 变换的结果相同