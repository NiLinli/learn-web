# debug

默认支持 Node + Js(其他能编译成 js 的语言)

其他语言需要安装额外的扩展

## type

调试的 语言/执行环境类型 node/cppdbg 等

## request 

调试的模式

Launch 程序启动的时候, debugger 就连接上去了
调试主流程代码而不是回调函数中的代码

launch + program

Attach 程序已经运行, debugger 再连接上去
调试回调函数中监听的代码可以使用 attach 

attach + port/program

## program & args

launching the debugger 时候去执行的程序以及参数

## cwd

当前工作区去寻找依赖

## port

attaching to a running process时候坚挺的port

## stopOnEntry

launch 时候时候给第一行代码打断点