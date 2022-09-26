const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, './source.txt');
const target = path.resolve(__dirname, './target.txt');

fs.link(source, target, (err) => {
  if (err) return;

  if (fs.statSync(source).ino === fs.lstatSync(target).ino) {
    console.log('hard link inode 相同');
  }
});
