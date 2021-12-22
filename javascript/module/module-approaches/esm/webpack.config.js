const path = require('path');
const fs = require('fs');



module.exports = {
  mode: 'development',
  // devtool: '',
  entry: {
    static: path.resolve(__dirname, './static/index.js'),
    dynamic: path.resolve(__dirname, './dynamic/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: './'
  },
};