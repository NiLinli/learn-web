# nest

dto: data transfer object

## Controller/Service

controller: 应处理 HTTP 请求
service: 复杂的任务委托给 providers

## Module

默认情况下, 模块是单例

middleware(中间件) -> guard(守卫) -> interceptor(拦截器) -> pipe(管道)

## pipe

处理/验证参数, 可抛出异常