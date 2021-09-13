# functional programming

JavaScript 不是典型 fp Lisp/Haskell, 但是函数是 **first-class** citizen, 所以支持书写一些函数式编程范式代码

## 特性

- Expression, no Statement
  - fp -> expression -> 运算 & 无 I/O
  - statement -> I/O
- Pure Function
  - 给定一定的参数
  - 返回同样的值 (同时强调有返回值)
  - 没有 side effect(副作用)
- 利用参数保存状态

## arity

函数参数 parameters 的个数

## lambda/anonymous

匿名函数  
λ 第十一个字母

## HOF

higher order function
高阶函数: 函数的参数 or 返回值是函数

1. 参数为 function
2. 返回一个新的 function, 新的 function 中调用参数里面存在的 function 并直接返回其值

## continuation

附加物, 程序剩余的部分

## idempotent

幂等性

## point free style

无参风格编程

## composition

函数组合

1. 将一系列函数组合执行
2. 从右向左执行 (pipe 相反)
3. 先执行的结果当作后执行的参数

## memoization

Memoization(记忆)

- function as arguments
- return a memoized version of the function

## partial function

- currying / auto currying 柯里化

- partial application 偏函数, 填充其中的一些参数, 返回一个新的函数(闭包的应用)

  - currying 柯里化
  - auto currying 自动柯里化

- 利用 closure
- 生成定义好 arguments 的新函数 (生成新函数的函数即为 partial function)

  - partial partialLeft partialRight
  - Function.prototype.bind
  - currying

    - 一次传递 n 个 argument 调用一次， 改为 n 次调用函数 每次传递一个 argument
    - 等同于 partial function 的定义

    4. Partial function (偏函数)

  - 绑定其中的参数(预设参数 or this)
  - 返回一个新的函数
  - bind
  - currying 柯里化

