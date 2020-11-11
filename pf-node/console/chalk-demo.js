// chalk [tʃɔːk] n/v 粉笔/用粉笔写
// https://github.com/chalk/chalk
const chalk = require('chalk');

const log = console.log;


const string = chalk.blue('hello world');
console.log(string);

log(chalk.blue('hello world'));

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Multi Style
log(chalk.blue.bgRed.bold('Hello World!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const name = 'Linli';
log(chalk.green('Hello %s'), name);

// 实际使用
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

log(error('Error'));
log(warning('Warning!'));




const { Console } = require('console');
const fs = require('fs');
const logger = new Console({ stdout: fs.createWriteStream('./chalk-stdout.log') });

logger.log(chalk.blue.bgRed.bold('Hello World!'));