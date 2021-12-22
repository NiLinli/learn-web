# module

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

## require 扩展

require 是一个 function, 拥有一些属性

- `require.main === module` 记录是不是主模块, 运行入口模块
- `require.cache`
- `require.extensions`
    1. 提示怎样处理扩展名( function handler )
    2. 可以使用, 但是已经被废弃
    3. 应该把其他语言编译成 js 再去加载
- `require.resolve()`
- `require.resolve.paths()`

## module 扩展

当前模块的引用, 不是全局, 仅限于模块内部

- `module.children` 引用的子模块
- `module.path` 此模块搜索其他模块的路径
