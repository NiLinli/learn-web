const { Command } = require('commander');
const program = new Command();

// boolean 选项才能取反

program
  // boolean 选项
  // no-debug 默认值为 false
  // 所以 debug 默认值为 true, 但是不能直接设置 debug 的值
  .option('--no-debug', '') 
  .parse(process.argv);


console.log(program.opts()); 
// { debug: true }


// 设置 --no-debug
// 读取 debug
// 不能交叉操作