const path = require('path');
const config = require('./config');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const printArgv  = require('./argv');

// 根据 NODE_ENV 设置不同版本
console.log('listen on version %s', config.version);

// export -p 类似, 导出环境变量
console.log('env', process.env);

process.env.HOME = '/Users/yuangon2222'; // 不会改变外部环境的环境变量
console.log(process.env.HOME);

// cross-env 设置当前环境变量, 并未使用 export 导出
console.log(process.env.NODE_ENV);

const loadEnv = (path) => {
  try {
    const env = dotenv.config({ path, debug: process.env.DEBUG });
    console.log(env);
    dotenvExpand(env);    // 转换 env 文件中的 变量扩展 ${}
    console.log(env);
  } catch (error) {}
};

const mode = process.env.NODE_ENV;
loadEnv(path.resolve(__dirname, `./env/.env${mode ? `.${mode}` : ''}`));


console.log(process.env.version);
