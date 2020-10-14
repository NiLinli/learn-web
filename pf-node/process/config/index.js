const path = require('path');

let NODE_ENV = process.env.NODE_ENV || 'development';

NODE_ENV = NODE_ENV.toLowerCase();

const file = path.resolve(__dirname, NODE_ENV);

try {
  const config = module.exports = require(file);
  console.log('Load config: [%s] %s', NODE_ENV, file);
} catch (err) {
  console.error('Cannot load config: [%s] %s', NODE_ENV, file);
  throw err;
}