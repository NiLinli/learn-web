const path = require('path');
const fs = require('fs');

const file = path.resolve(__dirname, './a.txt');

fs.chmod(file, 0o777, (err) => {
  if (err) return;

  fs.access(file, fs.constants.W_OK, (err) => {
    if (err) {
      console.log(`${file} 不可 write`);
      return;
    }

    fs.chmodSync(file, 0o555);
  });
});
