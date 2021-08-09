const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
// 单页面通过 common-chunk 分离不怎么变化的 module 达到缓存的目的
// 多页面通过 common-chunk 共享相同的模块

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    another: path.resolve(__dirname, './src/another-module.js'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
