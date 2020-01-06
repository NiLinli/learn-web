# module system

模块是一段独立的 Javascript 代码 , require 的返回值通常是 func 或者 object

Abstract syntax tree (AST)

- 遵循 commonjs 中的 module 规范
- 每个 js 文件都是一个模块
- 执行代码之前, Nodejs 会使用一个模块包装器对代码进行包装

cjs 需要实现

- require
- module.exports

## module 包装

模块内的变量是私有的, 模块被 Node 封装在一个函数中(函数作用域)

```javascript
(function(exports, require, module, __filename, __dirname) {
    // 模块的代码实际上在这里
});
```

- exports
- require
- module
- __filename
- __dirname

## require

require 是一个 function, 拥有一些属性

- `require.main === module` 记录是不是主模块, 运行入口模块
- `require.cache`
- `require.extensions`
    1. 提示怎样处理扩展名( function handler )
    2. 可以使用, 但是已经被废弃
    3. 应该把其他语言编译成 js 再去加载
- `require.resolve()`
- `require.resolve.paths()`

## module 对象

当前模块的引用, 不是全局, 仅限于模块内部

- `module.children` 引用的子模块
- `module.exports`  module.exports ,也可以通过全局模块的 exports 对象访问
- `module.path` 此模块搜索其他模块的路径

## exports 对象

和 module.exports 指向相同, 快捷方式
改变 exports 的指向导致不能正常工作 `exports = {}`

## 新建模块

- 每个文件都是包括 module 和 exports 的对象

1. 创建一个文件夹存放模块内容, 生成 `package.json` 文件 , `Readme.me` 说明文件
2. 符合 commonjs 包规范的目录
    - bin
    - lib
    - doc
    - test