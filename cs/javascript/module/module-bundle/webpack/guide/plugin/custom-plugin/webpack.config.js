const MyPlugin = require('./plugins/MyPlugin');
const path = require('path');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  mode: 'development',
  entry: {
    index: resolvePath('./src/index.js'),
  },
  devtool: false,
  module: {
    rules: [],
  },
  plugins: [new MyPlugin({ param: 'xxx' })],
  output: {
    path: resolvePath('dist'),
    filename: '[name].bundle.js',
  },
};
