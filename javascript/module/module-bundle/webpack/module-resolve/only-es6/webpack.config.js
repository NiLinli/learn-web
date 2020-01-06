const path = require("path");

module.exports = {
  mode: 'development',
  devtool: '',
  entry: {
    index1: path.join(__dirname, 'index1.js'),
    index2: path.join(__dirname, 'index2.js'),
  },
  output: {
    path: path.join(__dirname),
    filename: '[name].bundle.js'
  },
};