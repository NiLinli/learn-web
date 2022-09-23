const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  
  externals: {
    vue: 'Vue',
  },
  plugins: [
    // 生成新的 HTML 文件
    new HtmlWebpackPlugin({
      title: 'External',
      template: path.resolve(__dirname, './public/index.html'),
      minify: false,
      jss: [
        'https://cdn.bootcss.com/vue/2.5.2/vue.min.js'
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
};
