const fs = require('fs');
const filename = process.argv[1];

console.log(process.argv)

// argv = argument vector

if (!filename) {
  throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => {

  // async callback 中的错误会导致进程退出
  console.log(`File ${filename} changed!`);
});
 
console.log(`Now watching ${filename} for changes...`);       