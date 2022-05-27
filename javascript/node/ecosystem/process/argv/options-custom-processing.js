const { Command } = require('commander');
const program = new Command();


// value 用户新输入参数 
// previous 当前已有参数(命令行中多次选项)

function myParseInt(value) {
  return parseInt(value);
}

function count(value, previous) {
  return previous + 1;
}

function collect(value, previous) {
  return previous.concat(value);
}

function commaSeparatedList(value) {
  return value.split(',')
}

program
  // node options-custom-processing.js -f 1e2 -i 2 -v -v -v -c a -c b -c c -l ni,linli
  .option('-f, --float <number>', 'float argument', parseFloat)
  .option('-i, --integer <number>',  'integer argument', myParseInt)
  .option('-v, --verbose', '收集出现的次数', count, 0)
  .option('-c, --collection <value>',  '', collect, [])
  .option('-l, --list <items>', 'comma separated list', commaSeparatedList)
  .parse(process.argv);

  console.log(program.opts())