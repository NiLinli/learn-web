const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TerserPlugin 只是压缩代码, 去掉无用代码 => 函数级别 minimize(压缩)
// webpack 配置去标记模块中的哪些部分是无用代码 => 模块级别 usedExports(tree shaking)
// 只能标记 ESM
// 有些模块需要无法判断是否有 sideEffects, 需要自行标记, 以免误伤

module.exports = {
  mode: 'none',
  devtool: false,
  entry: path.resolve(__dirname, './src/index.js'),
  optimization: {
    minimize: true,
    // 默认实例化 TerserPlugin
    // minimizer: [
    //   new UglifyJSPlugin(),
    // ],
    // 收集 ESM 每个模块的导出情况, 标记哪些是 used/unused 
    usedExports: true,
  },
  plugins: [
    // 废弃
    // new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tree Shaking',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[contenthash].js',
    clean: true
  },
};
