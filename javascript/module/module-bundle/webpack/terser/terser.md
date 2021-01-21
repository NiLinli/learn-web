# terser

terser [tɜːs] 基本释义: adj.简洁的;简明的

压缩 ES6+ 代码

## 代替

uglify-js 不支持 ES6
uglify-es 支持 ES6 但是不再维护

## safari10

syntaxerror cannot declare a let variable twice e

We incorrectly throw a syntax error when declaring a top level for-loop iteration variable the same as a parameter.
参数和 for 循环中let 变量名相同， safari10 会错误的抛出一个错误。

## 未解决疑问

webpack 打包时候 babel-loader 和 uglifyJS 执行顺序
如果 babel-loader 先执行, uglifyJS 应该不会报错, 就没有必要有 terser 这个 lib
