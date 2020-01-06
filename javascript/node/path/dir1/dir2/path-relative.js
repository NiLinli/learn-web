const path = require('path'),
    fs = require('fs');


console.log(`process.cwd() = ${process.cwd()}`);
console.log(require('../test.json'));
// console.log(fs.readFileSync('../test.json', 'utf8'));


console.log(fs.readFileSync(path.join(__dirname, '../test.json'),'utf8'));


// dir1/dir2
// node path-relative.js
// ok
// ok


// dir1
// node dir2/path-relative.js
// ok
// Error: ENOENT: no such file or directory, open '../test.json'

// 分析
// process.cwd() = /Users/nilinli/Desktop/Note/learn-nodejs/path/dir1
// fs.readFileSync 中的相对路径 ../test.json
// 实际路径为 /Users/nilinli/Desktop/Note/learn-nodejs/path/test.json