# module

一般模块系统, 每个包含模块声明关键字的独立的文件都被视为模块

eg: ESM 中顶级 import/export 被认为是一个模块, 不包含的模块视为 global scope


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

#### esm default 引用 cjs

`import bar from './bar';`

bar

1. module.exports
2. module.exports.default

- Node 原始支持的 esm 始终为情况 1
- webpack
  - bar 模块中标记了 `exports.__esModule = true;` 表示cjs 模块是由 esm 转换而来的 情况2
  - 正常没有标注为情况 1

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
