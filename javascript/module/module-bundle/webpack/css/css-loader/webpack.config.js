const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //       options: {
      //         injectType: 'styleTag',
      //       },
      //     },
      //     'css-loader',
      //   ],
      // },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'linkTag',
            },
          },
          {
            loader: 'file-loader',
            options: {
              outputPath: 'css',
              publicPath: (url, resourcePath, context) => {
                // `resourcePath` 是资源的原始绝对路径
                // `context` 是存储资源文件（`rootContext`）或 `context` 配置项的目录

                console.log( url, resourcePath, context)
                // 获取你可以使用的相对路径
                const relativePath = path.relative(context, resourcePath);

                console.log(relativePath)
               
                return `css/${url}`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CSS',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
