# debug

debugger 客户端通过 DAP 与 debugger 服务端进行通信  
debugger 服务端与 vm/machine 进行通信

- debugger 客户端
- [DAP](https://microsoft.github.io/debug-adapter-protocol/) 协议适配标准
- debug protocol
- debugger 服务端
- vm/machine

## debugger 客户端

调试工具

- VS Code's built-in debugger
  - 调试 Node
  - 安装插件调试其他 Chrome/C/C++/Java etc...
- chrome 等浏览器 source 面板

### 面板

- variables/scope: 当前函数调用 scope 中变量显示
- watch: 观察当前 scope 中的变量
- call stack: 函数调用 stack, 可以切换显示不同的 scope
- breakpoints: 打断点情况
- ...其他平台相关属性

### action

- Resume/Paused script execution
- step/step into next function call 一步一步执行, 看到函数就进入
- step over function call 不进入函数的内部执行, 直接执行完成返回结果
- step out of current function 跳出函数内部执行, 直接返回结果

## 请求方式


### Attach

attach 到调试器服务, 关注点在于**连接**到远端调试服务

- address 
- port
### Launch

启动程序并 attach 到调试器服务, 关注点在于**启动程序**, attach 是内部自动链接的

命令

- runtimeExecutable 执行命令
- runtimeArgs 执行参数

可执行文件

- program

## debugger 服务端

通过 type 区分

### Node


文件映射

- localRoot: VS Code project 
- remoteRoot: 可执行的文件位置

如果 Node 通过框架执行, 
remoteRoot 
- remoteRoot

Node.js 进程通过监听 socket, 接受调试信息
调试客户端通过协议连接 socket, 发送操作信息


将 chrome 开发工具 attach 到 Node 实例上面进行调试, 可以多个 debugger 同时 attach 到一个 Node 实例上面调试

```bash
node --inspect=9223 app.js # 运行和 attach 并行
node --inspect-brk=9223 app.js # 第一行代码打断点
```

### Browser

launch + program
Launch 程序启动的时候, debugger 就连接上去了
调试主流程代码而不是回调函数中的代码

### Java


### C/C++

## Vscode

request

- launch: start your app + VS Code's debugger attaches to app
- attach: VS Code's debugger attaches to already running app

都是将 debugger attach 到 Node/Browser 实例上面, 只是 launch 添加了一个启动









## program & args

launching the debugger 时候去执行的程序以及参数

## cwd

当前工作区去寻找依赖

## port

attaching to a running process时候坚挺的port

## stopOnEntry

launch 时候时候给第一行代码打断点