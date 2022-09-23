const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(p) {
  return path.resolve(__dirname, p);
}

module.exports = {
  mode: 'none',
  entry: resolve('./src/main.js'),
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new HtmlWebpackPlugin({
      title: 'CSS',
      template: resolve(`./public/index.html`),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
};
