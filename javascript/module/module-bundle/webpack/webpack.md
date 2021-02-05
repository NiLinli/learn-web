# webpack

模块打包器
ES Module/CommonJs Module 转化为 webpack Module 运行  

- entry 打包入口(单个/多个)
- output 输出文件
- loader 模块转化器 **文件** module transform
- plugins 打杂, 非模块化的操作文件, 可以理解为不直接操作文件

## 整体结构

- runtime:
- manifest:

### loader

### plugin

- tree shaking
  - (uglifyjs-webpack-plugin) 源自于 rollup
  - uglifyjs-webpack-plugin 也可以在 npm script 中添加 `--optimize-minimize` 调用
  - package.json 的 "sideEffects" 配置有副作用的属性不被 tree shaking, 例如 polyfill

### source map

有错误后，将编译后的代码映射回源代码。

### webpack-dev-server

npm install --save-dev webpack-dev-server

## 输入输出

code-splitting

- 代码分离到不同的 bundle 中 (chunks: 块) (emitted: 发出)
- 按需加载或并行加载
- 极大影响加载时间

动态加载, 支持

- prefetch: resource is probably needed for some navigation in the future
- preload: resource might be needed during the current navigation

**缓存**

1. 提取 runtime + manifest.js
2. 分离第三方
   - vendor

## 环境

开发环境(development)

- 实时重新加载(live reloading)
- 热模块替换(hot module replacement)
- source map
- localhost server

生产环境(production)

- 更小的 bundle
- 更轻量的 source map, 或者不需要
- 更优化的资源，以改善加载时间

Don't repeat yourself - DRY - 通过 webpack-merge

- common
- dev
- prod

## 全局引入

externals

- $
- 没有提供模块化写法的 lib
- umd cdn
- polyfill

## 分析

### 整体

- 整体来看是一个 IIFE
- IIFE 参数是各个, 使用模块包装器(函数, 类似于 node 的 wrapper 函数)包装的模块代码

```javascript
(function (modules) {
  // 执行下面各个模块的各个引用

  return __webpack_require__((__webpack_require__.s = './index.js'));
})({
  './demo00/foo.js': function (module, __webpack_exports__, __webpack_require__) {
    // "./demo00/foo.js" 模块代码
  },
  './demo00/main.js': function (module, __webpack_exports__, __webpack_require__) {
    // "./demo00/main.js" 模块代码
  },
});
```

### webpack module

```js
var module = installedModules[moduleId] = {
	i: moduleId,
	l: false,   // 是否已经 load
	exports: {} // 导出的变量挂载对象
```

### require 函数

```js
__webpack_require__; // 函数

// 属性
__webpack_require__.s; //
__webpack_require__.m; //
__webpack_require__.c; //
__webpack_require__.p; //

// 方法
__webpack_require__.d; //
__webpack_require__.r; //
__webpack_require__.t; //
__webpack_require__.n; //
__webpack_require__.o; //
```

### esm 引用 cjs

```js
__webpack_require__.n = function (module) {
  var getter =
    module && module.__esModule
      ? function getDefault() {
          return module['default'];
        }
      : function getModuleExports() {
          return module;
        };
  __webpack_require__.d(getter, 'a', getter);
  return getter;
};
```

```js
import foo from './m'; // n 函数处理一层
import * as foo from './m'; // 直接 require

// 上面个两种情况等同于
var foo = require('./m');

import { foo } from './m';

// 等同于
var { foo } = require('./m');
```

### cjs 引用 esm

```js
export defaut xxx;
var xxx = require('xxx').default;
```
