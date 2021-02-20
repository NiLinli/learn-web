# backend for frontend

bff 是 api gateway 的一种实现

1. no bff 多端直接调用各种微服务, 杂乱无章...
2. api gateway
    1. 一个网关为多端提供一份接口
    2. 一个网关为多端提供多份接口(url 前缀区分)
    3. 多个网关为多端提供接口(bff 实现方式)

## graphQL

bff 可以使用 graphQL 实现

1. 定义数据模型, 按需获取
2. 数据分层, 一次查询多个接口, 聚合返回
3. 强类型, graphQL 提供了一套强类型
4. 协议而非存储
    - 解析客户端请求，知道客户端的“意图”之后
    - 通过对微服务API的访问获取到数据，对数据进行一系列的组装或者过滤
5. 无需版本化, 对比 RESTFUL API

对比 RESTFUL

1. 版本化
2. 请求入口, RESETFUL 多个请求入口, graphQL 只有一个
3. HTTP 响应状态, RESTFUL 准确返回 HTTP 状态码, graphQL 只返回 200
