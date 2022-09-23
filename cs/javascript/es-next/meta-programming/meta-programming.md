# meta programming

Meta programming is programming where the operation targets the behavior of the program itself.

在运行时生成和改变代码

- C: Macro
- Js: eval

## Proxy

**Proxy 不能 polyfilled**

1. Proxy 对象代理处理对象 target
2. 对 Proxy 的操作都会转发到 target 对应的 handler 上面
3. handler 接受转发操作和内容后, 可以使用 Reflection 操作反射到 target 上面

捕捉器 handler 有 10 多种  
使用 getter/setter 遍历对象只能处理 2 种  
除了可以捕捉 Object, 还可以捕捉 Array 操作  
