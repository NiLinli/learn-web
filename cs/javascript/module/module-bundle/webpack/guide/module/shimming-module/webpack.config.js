const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// shimming module
// 让非模块化代码能够被 webpack module 识别
// 原模块代码不可修改

module.exports = {
  mode: 'none',
  entry: {
    // polyfills: path.resolve(__dirname, './src/polyfill.js'),
    app: path.resolve(__dirname, './src/index.js'),
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/global.js'),
        loader: 'exports-loader',
				options: {
					type: 'module', // ES module
          exports: ['file', 'helpers']
				}
        // 会在处理的过程中添加
        // export { file, helpers };
      },
    ],
  },
  plugins: [
    // 生成新的 HTML 文件
    new HtmlWebpackPlugin({
      title: 'Shimming',
    }),
    // 全局导入 有 _ 会自动 import _ from 'lodash';
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
};
