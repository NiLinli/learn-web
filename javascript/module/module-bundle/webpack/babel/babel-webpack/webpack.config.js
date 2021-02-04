const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  mode: 'development',
  devtool: false,
  entry: resolvePath('./src/main.js'),
  output: {
    filename: 'main.bundle.js',
    path: resolvePath('./dist'),
    environment: {
      // browserslist 会根据浏览器自动处理
      // arrowFunction: false
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: false,
    // minimizer: [new UglifyJsPlugin()],
  },
};
