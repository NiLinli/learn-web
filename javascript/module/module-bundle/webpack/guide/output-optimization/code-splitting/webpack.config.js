const path = require('path');

// 拆分变化的部分
// 不变的部分就可以缓存

// 单页面通过 common-chunk 分离不怎么变化的 module 达到缓存的目的
// 多页面通过 common-chunk 共享相同的模块

module.exports = {
  mode: 'none',
  cache: false,
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    'index-another': path.resolve(__dirname, './src/index-another.js'),
  },
  plugins: [],
  optimization: {
    // 分离 runtime + manifest chunk
    runtimeChunk: 'single',
    // CommonsChunkPlugin => SplitChunksPlugin (提出公共依赖的部分 chunk)
    splitChunks: {
      // 设置哪些 chunk 会被优化
      chunks: 'all',

      // production 提出的 chunk 生成的 bundle name = moduleId
      // 无法缓存
      cacheGroups: {
        // vendor bundle 会随着自身的 module.id 的变化，而发生变化, 需要 fix
        // production 采用数字作为 moduleId, 会变化
        // development 是字符串作为 key , 不会有这个问题
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
