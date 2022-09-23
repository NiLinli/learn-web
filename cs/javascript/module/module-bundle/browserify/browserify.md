# browserify

2011 年出道, 2015 年被 webpack 干掉了

1. require 模块化打包器
2. 自动 shim 部分 node 核心模块和 变量

效果

1. 使用 cjs 模块化书写代码
2. 所以可以使用 npm 上面的 package (cjs 代码)

`browserify main.js -o dist/bundle.js`

## global 对象的处理

```javascript
function (require, module, exports) {
  (function (global) {
    var a = 2;
    var b = 4;

    global.c = 4;

    module.exports = {
      a,
      b
    };
  }).call(this,
    typeof global !== "undefined" ? global :
                  typeof self !== "undefined" ? self :
                                typeof window !== "undefined" ? window : {})
}

// 全局变量的处理 执行的代码被包裹在函数中 global 作为参数传递进去
// arguments 实际传递顺序 -- 检测
// 1. global
// 2. self
// 3. window
// 4. {}
```

## 代码

- demo00 browserify 初试
- demo01 使用 cjs 风格的 pkg
- demo02 global 对象包装 parameter 化
- demo03 require json 处理
- demo04 使用 node 核心模块 (browserify 引用 polyfill)
- demo05 exports 导出变量未拷贝并非引用(browserify 处理后与 node 执行相同)