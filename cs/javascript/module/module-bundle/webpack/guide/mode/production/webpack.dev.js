const path = require('path');
const chainConfig = require('./webpack.common.js');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

// 可以先在这里改一波 chainConfig
module.exports = merge(chainConfig.toConfig(), {
  mode: 'development',
  // 'eval-source-map' 指定 sourceMappingURL + sourceURL
  //    都是对应模块的 source map, 所以更新的时候比较快
  //    初次打包生成 source map 慢一些
  // 'eval'            指定 sourceURL 
  //    映射到编译后的 webpack module 代码，而不是源代码
  //    所以无法定位到源代码行数
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist/dev',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/dev'),
    filename: 'bundle-[chunkhash].js',
  },
});
