const path = require('path');

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: false,
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: [
          path.resolve(__dirname, './logger-loader.js'),
          'style-loader', // 将 css 字符串插入到 dom 中
          path.resolve(__dirname, './logger-loader.js'),
          'css-loader', // css 文件转化为字符串
        ],
      },
      // image
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      // xml
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
