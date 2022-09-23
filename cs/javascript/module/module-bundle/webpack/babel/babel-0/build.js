const babel = require('@babel/core');
const path = require('path');

function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}

// transformCode

const result = babel.transformSync('sayHello();', {});

console.log(result);
// result.code 输出 code
// result.map
// result.ast

// transformFile
// !! 将一个文件夹内所有的文件都改写输出

const result2 = babel.transformFileSync(resolvePath('./src/main.js', {}));
console.log(result2);
