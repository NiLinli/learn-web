# meta programming

Meta programming is programming where the operation targets the behavior of the program itself.

在运行时生成和改变代码

- C: Macro
- Js: eval

## Proxy

Due to the limitations of ES5, Proxies cannot be transpiled or polyfilled.

class

proxy Object: 作为 normalObject 的一个代理对象

1. create wraps another normal object
2. 在 proxy Object 上可以注册一些 handler, handler 上面可以添加一些其他逻辑

handler: 操作 normalObject + 其他逻辑

- get: 拦截 `[[get]] operation`

## Reflection

访问 proxy, 一系列逻辑后, 需要反射到 target 上面, 有助于将默认程序转发到目标

a global plain object