const { Command } = require('commander');
const program = new Command();

// 版本号 默认设置为 '-V --version' 输出版本号
// options-common.js -V
program.version('0.0.1');

program
  // boolean 选项
  // options-common.js -d
  .option('-d, --debug', '') 
  .option('-s, --small', '') 
  // 带参数选项
  // options-common.js -p vegetarian
  // options-common.js --pizza-type=vegetarian 
  .option('-p, --pizza-type <type>', '');

program.parse(process.argv);

if (program.debug) console.log(program.opts());

console.log('pizza details:');

if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);



