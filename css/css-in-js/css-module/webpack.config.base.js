const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(p) {
  return path.resolve(__dirname, p);
}

module.exports = {
  mode: 'none',
  entry: resolve('./src/index.js'),
  plugins: [
    new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		}),
    new HtmlWebpackPlugin({
      title: 'CSS',
    }),
  ],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
};
