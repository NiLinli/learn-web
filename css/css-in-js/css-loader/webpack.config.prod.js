const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        // MiniCssExtractPlugin 会将单个 js 中引用的 css 合成一个文件
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // use: [
        //   {
        //     loader: 'style-loader',
        //     options: {
        //       injectType: 'linkTag',
        //     },
        //   },
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       outputPath: 'css',
        //       publicPath: (url, resourcePath, context) => {
        //         // 获取你可以使用的相对路径
        //         // const relativePath = path.relative(context, resourcePath);
        //         return `css/${url}`;
        //       },
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
