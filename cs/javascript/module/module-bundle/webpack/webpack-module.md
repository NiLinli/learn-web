# webpack

## 整体

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

## webpack module

```js
var module = (installedModules[moduleId] = {
  i: moduleId,
  l: false, // 是否已经 load
  exports: {}, // 导出的变量挂载对象
});
```

## require 函数

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

## esm 引用 cjs

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
