const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const chainConfig = require('./webpack.common.js');

module.exports = merge(chainConfig.toConfig(), {
  mode: 'production',
  // 生成独立的 source map 文件, 限制普通用户访问
  // 默认选择为 none, 不生成任何 source map 文件
  devtool: 'source-map',
  plugins: [
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
