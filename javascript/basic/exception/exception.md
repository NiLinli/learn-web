# exception

错误处理思路：

1. 浏览器发生错误了, 用户不知道, 用户会莫感到困扰, 然后抛弃 web application
2. 所有很有必要尽可能全的去处理错误

## throw

`throw expression`

1. custom error
2. expression 可以是任何类型的值
3. 最好是一个 Error-like 的对象

需要自定义错误的情况(一般在函数中 throw)：

1. 调用函数时(公共 lib), 没有按照规范去调用, 浏览器会抛出错误(已知)
    - 参数传递不对
2. 不同浏览器抛出的错误信息不同, 不便与判断与分析
3. 在函数中添加一些判断, 抛出自定义错误去 **代替** 浏览器抛出的错误, 便于分析

## try/catch/finally

同步执行的代码, 用于处理函数调用可能会抛出的错误

try-catch

1. error 发生在 try-catch 中, 不会中止程序执行的条件
    - 必须 catch 了 error
    - catch 语句中没有发生错误( 可以嵌套 try-catch )
    - 宿主会认为错误被处理了, 不会中断程序继续执行
2. try-catch 适合处理不在自己控制范围内的错误
    - 使用一个 lib (不修改源代码), try-catch 里面的有可能的错误
3. 不适合已经明确的错误(自己代码中发现的 Bug)

finally

1. try-finally
    - try 中错误之后的代码不会被执行
    - 因为没有 catch , 执行完 finally 中的代码之后, 程序会中止
2. finally 存在的意义
    - 语义
    - catch 中如果有错误, finally 的代码依旧会执行
    - finally 中用于释放内存资源等
    - finally 中的 return 语句会覆盖其他的 return 语句

## async 异常处理

异步方法在调用阶段立即返回, 异常并不一定发生在这个阶段, try-catch 通常不适用  
异常传递多是通过 callback 的参数传递, 异步函数内部会使用 try-catch 处理错误  
Node 中是通过把 错误传递给 callback 的第一个参数

编写异步方法：

1. 必须执行调用者传递的 callback
2. 必须传递异常供调用者判断
    - `callback(null, data)` success
    - `callback(error)` fail
3. 不要试图对 callback 进行异常捕获

## Env

- nodejs 无论同步还是异步 callback 中报错, 程序进程都会退出
- web 报错后进程不会退出， 之前执行的代码和监听的事件依然可以响应