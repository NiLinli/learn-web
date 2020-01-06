// 导出
// foo.js
const a = 1;
const b = 2;

// 导出方式 1
export { a, b };

// 导出方式 2
export default {
  a,
  b
};


// main.js
// 导入方式 1.1
import { a, b } from './foo';
// 导入方式 1.2
import * as foo from './foo';

// 导入方式 2
import foo from './foo';