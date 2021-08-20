const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// mode:
//  none
//  development
//  production(webpack5 默认值)
//  1. 如果没有再 config 中指定 mode,  cli 将使用可能有效的 NODE_ENV 值作为 mode
//  2. DefinePlugin 中 process.env.NODE_ENV 对应设置为 development/production

// webpack-cli 支持：
//  --env       webpack 的 env, 与 shell ENV 不同
//  --node-env  shell ENV, 意义不大
const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  // devtool: false,
  devServer: {
    contentBase: './dist',
    hot: true, // 启用模块HMR
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    // new webpack.NamedChunksPlugin(), // 以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
};

module.exports = (env) => {
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  return config;
};
