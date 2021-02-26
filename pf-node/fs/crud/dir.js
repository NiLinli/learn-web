const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test-dir');

fs.mkdir(file, () => {
  console.log(`文件夹 ${file} 已经创建`);

  const childDir = file + '/child';
  fs.mkdir(childDir, () => {
    console.log(`文件夹 ${childDir} 已经创建`);
    fs.readdir(file, {}, (err, files) => {
      console.log(files);

      // fs.rmdir(file,  (err) => {
      //   if (err) console.log('文件夹没能成功删除');
      // });

      setTimeout(() => {
        fs.rmdir(file, (err) => {
          // v12.10.0 才支持 recursive
          // fs.rmdir(file, { recursive: true },(err) => {
          if (err) console.log('文件夹没能成功删除');
        });
      }, 5000);
    });
  });
});
