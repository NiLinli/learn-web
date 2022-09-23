const fs = require('fs');

const template = fs.readFileSync(require.resolve('./form-letter.template'), { encoding: 'utf8' });

// 正则表达式占位符的应用
const result = template.replace(/=FIRST=/, 'nixixi')
  .replace(/=SECOND=/, 'nilinli')

console.log(result)