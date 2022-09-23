// 尚未执行的代码称为 continuation
// async 编程中的 callback 都是 continuation

const fs = require('fs')

const continueProgramWith = (data) => {
  // Continue program with data
  console.log(data.toString());
}

fs.readFile('./arity.js', (err, data) => {
  if (err) {
    return;
  }
  continueProgramWith(data);      // continuation code
})