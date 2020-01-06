# module

## JS 代码发展

1. 全局变量
    - 污染了全局变量，可能发生命名冲突
    - 模块成员看不出直接关系
2. moduleObject (解决了全局变量, 同时带来两个新的问题)
    - 暴露所有的模块成员
    - 内部状态可以被外部改写
3. closure 解决了 2 的问题
    - 参数可以传递其他模块
    - moduleObject 作为返回值

## 模块模式 module pattern

匿名闭包函数

- pattern0 模块化发展历史
- pattern1 模块模式

## 模块规范 module approaches

模块的形式确定了其运行机制, 即特性

1. 转换也会保留其特性
2. webpack 不同模块类型互相引用也会保留其特性

特性保留, 形式可以相互转换, 形式转换的方式不同 loader 和 bundle 不同

js
一般处理 (cjs 和 esm)

```js
const a = 1;
const b = 2;
module.exports = { a, b };
// 等同与
export { a, b }
```

```js
import { a, b } from './foo';
const foo = require('./foo');
foo.a;
foo.b;
```

ts 特殊处理 import cjs

```js
import a from './a';
import * as a from './a'  // 这里 a 只能被认为是一个对象, 所以无法当作函数调用
import a = require('./a')
```

ts 中如何 import 取决于 d.ts 的定义

- 有可能定义为 exports =
- 有可能定义未 export default =
- 有可能定义为 export { ... ... }

## d.ts 的书写

1. 输出成 js 时候类型丢失, 需要 d.ts 存储
2. 定义该如何导出

## 代码书写

前端代码

全部写 ES module 代码

导入 cjs

```js
import { } from '';
import * as xxx from '';
```
  
## 代码发布

源码使用 TS 书写

- dist 文件文件夹边写 UMD
- 前端项目发布一份 ES 2015+ 的代码
- 前后端公用项目 cjs 代码