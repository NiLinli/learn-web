const { Command } = require('commander');
const program = new Command();

program.version('0.0.1');

program
  // [] 可传参数
  .option('-c, --cheese [type]', 'add the specified type of cheese') 
  // <> 必传参数
  .option('-p, --pizza-type <type>', 'blue')
  // 选贤级别 必填选项
  .requiredOption('-s --salt', 'pizza must have salt')
  .parse(process.argv);

  // options-flag-or-value.js
  if (program.cheese === undefined) console.log('no cheese');
  // options-flag-or-value.js -c
  else if (program.cheese === true) console.log('add cheese');
  // options-flag-or-value.js -c mozzarella
  else console.log(`add cheese type ${program.cheese}`);
