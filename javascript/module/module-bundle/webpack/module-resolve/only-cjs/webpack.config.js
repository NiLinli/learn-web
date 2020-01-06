const path = require("path");

module.exports = {
  mode: 'development',
  devtool: '',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'index.bundle.js'
  },
};