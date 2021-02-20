const path = require('path');

console.log(`. = ${path.resolve('.')}`);
console.log(`__dirname = ${ __dirname}`);
console.log(`path.resolve(__dirname) = ${ path.resolve(__dirname)}`);

// dir1/dir2
//. = .../dir1/dir2
//__dirname = .../dir1/dir2

// dir1
// . = .../dir1
// __dirname = .../dir1/dir2

// working directory
// pathtest.js 所在的目录


// because the path inside require is always relative to the file in which you are calling it.
// It has nothing to do with your working directory.

