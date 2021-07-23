const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    // 编译时 (macro)
    // 将变量替换成表达式
    // 或者值
    new webpack.DefinePlugin({
      // process.env.NODE_ENV 会根据 mode 默认赋值 
      'process.env.NODE_ENV': JSON.stringify('prod'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    filename: 'bundle-[chunkhash].js',
  },
});
