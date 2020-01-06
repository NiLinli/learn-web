const path = require("path");

module.exports = {
  mode: 'development',
  devtool: '',
  entry: {
    index: path.join(__dirname, 'index.js'),
  } ,
  output: {
    path: path.join(__dirname),
    filename: '[name].bundle.js'
  },
};