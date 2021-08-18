const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  cache: false,
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    'index-another': path.resolve(__dirname, './src/index-another.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: `index.html`,
      chunks: ['index'],
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: 'index-another',
      filename: `index-another.html`,
      chunks: ['index-another'],
      minify: false,
    }),
  ],
  optimization: {
    minimize: true,
    usedExports: true,

    // 分离 runtime + manifest chunk
    // manifest 打包后有可能会改变, 导致 runtime bundle 改变
    // 优化点: 提取出 manifest 部分
    runtimeChunk: 'single',

    // production 提出的 chunk 生成的 bundle name = moduleId
    // moduleId 在代码中存在, 会影响代码的 content, 导致 contenthash 改变 => 无法缓存
    // deterministic 确定的
    moduleIds: 'deterministic',

    // Plugin: CommonsChunkPlugin => SplitChunksPlugin
    // 作用: 提出公共依赖的部分 chunk
    // webpack 有 splitChunks 默认配置
    splitChunks: {
      // 设置哪些 chunk 会被优化
      // async   异步模块(默认值)
      // all 同步 + 异步模块
      // initial 行为在改变, webpack 5 和 all 一致
      chunks: 'all',
      // 最小的块的文件 size
      minSize: 0,

      // 满足条件的 chunk 聚合在一起, 形成 group bundle
      // 默认有 defaultVendors default 两个 group
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'common',
        },
      },
    },
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, `dist/${new Date().valueOf()}`),
    // clean: true,
  },
};
