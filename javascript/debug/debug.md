# debug

调试工具

- VS Code's built-in debugger
  - 调试 Node
  - 安装插件调试其他 Chrome/C/C++/Java etc...
- chrome 等浏览器 source 面板

## 调试器

面板

- variables/scope: 当前函数调用 scope 中变量显示
- watch: 观察当前 scope 中的变量
- call stack: 函数调用 stack, 可以切换显示不同的 scope
- breakpoints: 打断点情况
- ...其他平台相关属性

action

- Resume/Paused script execution
- step/step into next function call 一步一步执行, 看到函数就进入
- step over function call 不进入函数的内部执行, 直接执行完成返回结果
- step out of current function 跳出函数内部执行, 直接返回结果

vscode/chrome 还有很多其他的玩法

## Node

### 内置调试器

bash 命令行输入命令进行调试 **古老的方式**

```bash
debug>
```

- cont, c: 继续执行。
- next, n: 单步执行下一行。
- step, s: 单步进入。
- out, o: 单步退出。
- pause: 暂停运行中的代码（类似于开发者工具中的暂停按钮）

etc

breakpoint 通过在代码中添加 `debugger;` 语句

### V8 调试器

将 chrome 开发工具 attach 到 Node 实例上面进行调试, 可以多个 debugger 同时 attach 到一个 Node 实例上面调试

```bash
node --inspect=9223 app.js # 运行和 attach 并行
node --inspect-brk=9223 app.js # 第一行代码打断点
```

## Browser

## Vscode

request

- launch: start your app + VS Code's debugger attaches to app
- attach: VS Code's debugger attaches to already running app

都是将 debugger attach 到 Node/Browser 实例上面, 只是 launch 添加了一个启动
