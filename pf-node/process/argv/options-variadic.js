const { Command } = require('commander');
const program = new Command();

program
  // options-variadic.js -n 1 2 3 --letter a b c
  .option('-d, --debug', '')

  // 接受多个参数
  .option('-n, --number <numbers...>', 'specify numbers')
  .option('-l, --letter [letters...]', 'specify letters')
  .parse(process.argv)

console.log(program.opts())
// process.args 
// 通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中
// -- 后面的参数
console.log('Remaining arguments: ', program.args)