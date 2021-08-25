const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './index.js'),
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
      title: 'snabb dom',
      template: require.resolve('./public/index.html'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
};

module.exports = (env) => {
  return config;
};
