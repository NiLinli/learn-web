const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            // 默认支持 hmr
            loader: 'style-loader',
            options: {
              injectType: 'styleTag',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
		contentBase: './dist',
		port: 8084
  },
});
