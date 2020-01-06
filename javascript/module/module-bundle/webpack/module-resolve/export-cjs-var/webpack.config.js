const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname)
  }
};