const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('webpack-chain');


const config = new Config();

config
  .entry('index')
    .add(path.resolve(__dirname, './src/index.js'))
    .end()

config
  .plugin('clean')
    .use(CleanWebpackPlugin, [{
      cleanAfterEveryBuildPatterns: ['dist'],
    }])

config
  .plugin('html')
    .use(HtmlWebpackPlugin, [{
      title: 'Production',
    }]);

module.exports = config;
// {
//   entry: path.resolve(__dirname, './src/index.js'),
//   plugins: [
//     new CleanWebpackPlugin({
//       cleanAfterEveryBuildPatterns: ['dist'],
//     }),
//     new HtmlWebpackPlugin({
//       title: 'Production',
//     }),
//   ],
// };
