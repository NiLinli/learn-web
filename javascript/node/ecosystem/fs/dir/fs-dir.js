const fs = require('fs');
const path = require('path');

// fs.Dir + fs.opendir 相关新增于 12.12.0
const file = path.resolve(__dirname, './fd');

fs.stat(file, (err, stats) => {
  if (err) throw err;

  if (stats.isDirectory()) {
    // fs.opendir(file, (err, dir) => {
    //   if (err) throw err;
    //   dir;
    // });
  }
});


const a = fs.readdir(file, (err, data) => {
  if (err) throw err;

  data;
});

