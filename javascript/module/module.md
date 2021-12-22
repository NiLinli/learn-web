# module

一个挂在了方法和属性的对象 抽象为 `exports`

## JS 模块化发展

1. globalObject
    - 污染了全局变量，可能发生命名冲突
    - 模块成员看不出直接关系
2. moduleObject (解决了全局变量, 同时带来两个新的问题)
    - 暴露所有的模块成员
    - 内部状态可以被外部改写
3. closure 解决了 2 的问题
    - 参数可以传递其他模块
    - moduleObject 作为返回值
4. AMD/CMD/UMD 方案
5. CommonJS module 规范
6. UMD = AMD + CMD + CommonJs
7. ES module

每种模块话方案都有其特性, 如果互相转换需要保留特性

## 模块转换

esmodule 和 cjsmodule 不是完全兼容的
以 `exports` 为标准, 导出对象在上面挂载  

### export

普通

```js
const a = 1;
const b = 2;

// cjs
exports.a = a;
exports.b = b;

// esm
export { a, b }
```

esm default 行为

```js
const bar = {};

// cjs
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bar;

// esm
export default bar;
```

### import

普通

```js
// cjs
const { a, b } = require('./foo');
const foo = require('./foo');

// esm
import { a, b } from './foo';
import * as foo from './foo';
```

esm default 行为

```js
// cjs
const { default: bar } = _interopRequireDefault(require('./bar'));
function _interopRequireDefault(obj) { 
    // 非 __esModule 也会被解构, 所以需要 wrapper obj
    return obj && obj.__esModule ? obj : { default: obj };
}

// esm
import bar from './bar';
```

### ts module

扩展 esmodule, ts 中如何 import 取决于 d.ts 的定义  
转换关系

export = 和 import = require()

```js
import a = require('./a');
const a = require('./a');

export = {};
module.exports = {};
```

## 代码发布

源码使用 TS 书写

- dist 文件文件夹边写 UMD
- 前端项目发布一份 ES 2015+ 的代码
- 前后端公用项目 cjs 代码

1. 创建一个文件夹存放模块内容, 生成 `package.json` 文件 , `Readme.me` 说明文件
2. 符合 commonjs 包规范的目录
    - bin
    - lib
    - doc
    - test
