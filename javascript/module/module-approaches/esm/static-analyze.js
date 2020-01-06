// commonjs/ require
const foo = require(`all/${['f', 'o', 'o'].join('')}`);
const bar = require('all/BAR'.toLowerCase);


// esm
import foo from 'all/foo';
import bar from 'all/bar';

// parse 成 AST 时候
// cjs/amd 无法判断依赖, 依赖都是运行的时候获得
// esm 可以直接进行静态分析


// require 静态字符串 理论上可以转换为 import 写法 并进行分析
// 但是从语义上来说 require 有特定的意义, 无法保证引用的第三方 require 都是静态字符串, 所以无法做静态分析