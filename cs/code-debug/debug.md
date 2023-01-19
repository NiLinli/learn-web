# debug

debugger 客户端通过 DAP 与 debugger 服务端进行通信  
debugger 服务端与 vm/machine code 进行通信  
最终 debugger 客户端与 vm/machine code 通信

- debugger 客户端
- [DAP](https://microsoft.github.io/debug-adapter-protocol/) 协议适配标准
- debug protocol
- debugger 服务端
- vm/machine code(source map 等与源码映射)

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

本质都是 attach 到 debugger 服务端

### Attach

attach 到调试器服务, 关注点在于**连接**到 debugger 服务端  
场景: 本地调试 + 远程调试

- address
- port/processId

### Launch

编译 & 启动程序 & attach 到调试器服务, 关注点在于**启动程序**, attach 是内部自动链接的  
场景: 本地调试  

需要指定启动的程序入口, 不同语言方式不同

- node: index.js or npm script
- java: mainClass
- c: main function 

## debugger 服务端

监听**进程**或者**端口**进行信息沟通

### Node

#### v8-inspector protocol

Node inspect 模块启动 ws 服务, 连接 ws 服务进行调试  
Node.js 进程通过监听 socket, 接受调试信息  
调试客户端通过协议连接 socket, 发送操作信息

```sh
node --inspect=9223 app.js      # 运行和 attach 并行
node --inspect-brk=9223 app.js  # 第一行代码打断点
```

#### 文件映射

- localRoot: VS Code project
- remoteRoot: 执行命令的位置 `process.cwd()` (Auto Attach)

remoteRoot 存在代码编译情况, ~~需要知道编译后的位置根目录~~, 不需要  
要知道 shell 执行的文件夹 `process.cwd()`, 一般也是 `${workspaceFolder}`  
比如 `node dist/main.js` 而不是 `cd dist && node main.js`

#### sourcemap

- sourceMaps: true 默认为 true, 默认寻找使用 source map  

sourcemap 寻找
- outFiles 在这个配置中的文件会被寻找, 缩小 sourcemap 查找范围  
- resolveSourceMapLocations 追加 outFiles 以外的路径

### Browser

launch

#### v8-inspector protocol

[Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)

- v8-inspector protocol (v8) Node 6.3+

1. 启动 调试需要启动一个新的 chrome

- launch: vscode 启动 chrome.exe --remote-debugging-pipe
- attach: 自行手动启动 chrome.exe --remote-debugging-port=9222

2. 建立 Websocket

- launch: 自动连接 debugging pipe 沟通
- attach: 手动指定 9222 端口沟通

浏览器建立 ws, 通过页面的 targetId/url 等分发调试页面  
自行开启浏览器 remote debugging port 很麻烦, 调试浏览器不使用 attach 模式

- url/file  单个网址/单个文件, 可以理解为 Node 中的 remoteRoot
- runtimeExecutable 浏览器版本
- runtimeArgs 浏览器参数

#### sourcemap

1. webpack vite 等打包前端代码生成 sourcemap
2. 开启浏览器, 监听浏览器 ws
3. 浏览器根据 url 加载文件并加载 sourcemap(浏览器面板中不显示sourcemap), 需要确保文件对应的 sourcemap 文件是代码源文件
  - webpack sourcemap 是 webpack:///src/*, 所以需要 rewrite 到 ${webRoot}/src/*
  - vite sourcemap 就是代码工程源文件,不需要 rewrite

```
"sourceMapPathOverrides": {
  "webpack:///src/*": "${webRoot}/src/*"
}

- outFiles
- webRoot 源代码地址
- sourceMapPathOverrides(chrome only) 打包工具生成的 sourcemap 达不到预期
```

### Java

#### JDWP

Java Debug Wire Protocol Transport Interface

### C/C++

launch  
c 语言只能有一个 main 函数, 所以单个 c 文件和多个 c 文件构建方式和调试不同

1. build: task gcc build
2. lldb 调试: launch preLaunchTask build