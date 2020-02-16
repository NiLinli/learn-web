const path = require('path');

// dirname
// 返回文件的目录部分
console.log(path.dirname('/Users/nilinli/nixixi.md'));
console.log(path.dirname('/Users/nilinli/demo'));

// basename
// 返回文件名
console.log(path.posix.basename('/Users/nilinli/nixixi.md'));
// 去掉后缀
console.log(path.posix.basename('/Users/nilinli/nixixi.md', '.md'));

// extname
// 返回扩展名
console.log(path.extname('/Users/nilinli/nixixi.md'));
console.log(path.extname('/Users/nilinli/nixixi.'));
console.log(path.extname('/Users/nilinli/nixixi'));


// delimiter 定界符
console.log(process.env.PATH);
console.log(path.delimiter);
console.log(process.env.PATH.split(path.delimiter));

// sep 文档分隔符
console.log(path.sep);