const { Command } = require('commander');
const program = new Command();

program.version('0.0.1');

program
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue') // options-default.js
  .parse(process.argv);

console.log(`cheese: ${program.cheese}`);
