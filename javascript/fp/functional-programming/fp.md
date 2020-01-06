# Functional Programming

## first-class functions

- A programming language is said to have first-class functions if it treats functions as first-class citizens.
- This means the language supports
    1. passing functions as arguments to other functions.
    2. returning them as the values from other functions.
    3. assigning them to variables or storing them in data structures.

## FP in JavaScript

1. JavaScript is not a functional programming language like Lisp or Haskell.
2. But the fact that JavaScript can manipulate functions as objects(objects is first-class) means that we can use functional programming techniques in JavaScript.
3. build-in FP in Javascript
    - map()
    - reduce()
    - ....

## FP重要特性

1. Expression, no Statement
    - fp -> expression -> 做运算, 不管I/O
    - statement -> I/O
2. Pure Function
    - 给定一定的参数
    - 返回同样的值 (同时强调有返回值)
    - 没有 side effect(副作用)
3. 利用参数保存状态

## 应用

1. Higher-order function (HOF高阶函数)
    - 作为参数传递
    - 作为返回值
2. Partial function (偏函数)
    - 绑定其中的参数(预设参数 or this)
    - 返回一个新的函数
    - bind
    - currying 柯里化
3. Memoization(记忆)
    - function as arguments
    - return a memoized version of the function

## FP Jargon

- first class
- purity/side effect

- arity 函数参数 parameters 的个数
- HOF   高阶函数 - 函数的参数或者返回值为函数
- closure 闭包
- lambda  匿名函数
- partial application 偏函数, 填充其中的一些参数, 返回一个新的函数(闭包的应用)
  - currying 柯里化
  - auto currying 自动柯里化
- currying / auto currying 柯里化
- function composition 函数组合
- continuation
- idempotent
- point free style

## partial function

- 利用 closure
- 生成定义好 arguments 的新函数 (生成新函数的函数即为 partial function)
  - partial partialLeft partialRight
  - Function.prototype.bind
  - currying
    + 一次传递 n 个 argument 调用一次， 改为 n 次调用函数 每次传递一个 argument
    + 等同于 partial function 的定义