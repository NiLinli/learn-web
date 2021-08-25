const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, './test.txt');
const newFile = path.resolve(__dirname, './test-new.txt');

fs.rename(file, newFile, (err) => {
  if (err) throw err;

  setTimeout(() => {
    fs.rename(newFile, file, (err) => {
      if (err) throw err;
    });
  }, 5000);
});
