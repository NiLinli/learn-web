# Process

## node command

- `node` 执行 REPL
- `node [options] [v8-options] [-e string | script.js | -] [--] [arguments ...]`

--

1. node 表示 node 启用的程序执行完成了, 剩余的参数与 node 无关了, script 通过 argv 获取 -- 后面的参数
2. npm 表示 npm 启动的程序执行完成了, 剩余的参数转移到具体的 子 script 中去
3. 其他程序设计时候, 也可以遵循这种设计原则, 将 -- 后面的参数不处理, 当作子 script 的参数传递

A 参数1 B -- 参数2

1. 执行 A 参数1
2. 唤起 B 参数2

commander.js v7+ API 有变更

## env

cross-env

1. 可以读取系统环境变量
2. 可以修改环境变量(只在此进程中有用)

设置开发环境

## argv

返回一个数组, 空格分割, 数组为整个 node 命令行

0: process.execPath
1: script.js
2: params1
3: ...

`process.argv.slice(2)`

## 事件

### uncaughtException

### exit
