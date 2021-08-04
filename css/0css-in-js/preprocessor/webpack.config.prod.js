const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // 编译 sass 的相关选项
              sassOptions: {
                fiber: require('fibers'), // 同步编译
              },
              // 拼接代码 additionalData prependData
              // additionalData: (content, loaderContext) => {
              //   // 注入一些全局需要的代码
              //   const global = `
              //     $env: ${process.env.NODE_ENV};
              //     @import "@/scss/variable.scss";
              //   `;
              //   return global + content;
              // },
              additionalData: `@import "@/scss/variable.scss";`,
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              additionalData: `@import "@/less/variable.less";`,
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
