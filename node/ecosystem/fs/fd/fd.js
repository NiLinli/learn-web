const fs = require('fs');
const path = require('path');

fs.open(path.resolve(__dirname, '../fs.md'), 'r', (err, fd) => {
  if (err) {
    throw err;
  }

  console.log(typeof fd); // number
  console.log(fd);

  fs.fstat(fd, (err, stat) => {
    if (err) {
      throw err;
    }

    console.log(stat.ino);

    fs.close(fd, (err) => {
      if (err) {
        throw err;
      }
    });
  });
});















