const path = require('path');
const chainConfig = require('./webpack.common.js');

// 可以先在这里改一波 chainConfig
module.exports = merge(chainConfig.toConfig(), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/dev',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/dev'),
    filename: 'bundle-[chunkhash].js',
  },
});
