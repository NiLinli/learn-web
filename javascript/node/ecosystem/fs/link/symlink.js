const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, './source-symbol.txt');
const target = path.resolve(__dirname, './target-symbol.txt');

fs.symlink(source, target, (err) => {
  if (err) return;

  if (fs.statSync(source).ino !== fs.lstatSync(target).ino) {
    console.log('symbol link inode 不相同');
  }

  if (fs.statSync(source).ino === fs.statSync(target).ino) {
    console.log('fs.stat 会指向链接源文件');
  }

  // 检查一个文件是不是符号文件
  const isSymbLink = fs.lstatSync(target).isSymbolicLink(); // 该方法只在 lstat 有效
  const symbSource = fs.statSync(target);

  console.log(`
    ${target} 是符号链接吗？ ${isSymbLink}
    指向 inode 为 ${fs.readlinkSync(target)} 文件
  `);
});
