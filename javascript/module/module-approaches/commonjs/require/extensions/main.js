// require.extensions
console.log(require.extensions);

// { '.js': [Function],
//   '.json': [Function],
//   '.node': [Function]
//  }

// 把 js 的处理 handler 赋予 teajs, 使得 teajs 用于与 js 一样的处理方式
require.extensions['teajs'] = require.extensions['js'];

const foo = require('./foo.teajs').foo;

console.log(foo);



// 已经被废弃, 不要再使用
// 良好实践: 先编译成 js 再运行
