# terser

terser [tɜːs] 基本释义: adj.简洁的;简明的

压缩 ES6+ 代码

## 代替

1. uglify-js 不支持 ES6
2. uglify-es(fork uglify-js) 支持 ES6 但是不再维护
3. terser(uglify-js)

## safari10

syntaxerror cannot declare a let variable twice e

We incorrectly throw a syntax error when declaring a top level for-loop iteration variable the same as a parameter.
参数和 for 循环中let 变量名相同， safari10 会错误的抛出一个错误。

## webpack

webpack4.6 开始推 terser
webpack5 默认配置 terser

babel-loader -> uglify-js 也可以满足大多场景
