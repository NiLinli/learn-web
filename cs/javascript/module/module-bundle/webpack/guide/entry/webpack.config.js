// 输出无法使用
const resolve = require.resolve;
const path = require('path');

module.exports = {
  mode: 'development',
  // 单个入口
  // entry: resolve('./src/index.js'),

  // 单个入口多个文件 等于直接把 index-sub 放入到 index 文件当中 
  // entry: [resolve('./src/index-sub.js'), resolve('./src/index.js')],

  // 多个入口(多页面配置)
  entry: {
    index: resolve('./src/index.js'),
    'index-sub': resolve('./src/index-sub.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
};
