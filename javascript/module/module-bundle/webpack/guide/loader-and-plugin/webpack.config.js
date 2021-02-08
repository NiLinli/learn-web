const MyPlugin = require('./plugins/MyPlugin');
const path = require('path');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  mode: 'development',
  entry: {
    index: resolvePath('./src/index.js'),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          'raw-loader',
          resolvePath('./loaders/uppercase-loader.js'),
          resolvePath('./loaders/reverse-loader.js'),
          resolvePath('./loaders/sync-loader.js'),
          resolvePath('./loaders/async-loader.js'),
          resolvePath('./loaders/buffer-loader.js'),
        ],
      },
    ],
  },
  plugins: [new MyPlugin({ param: 'xxx' })],
  output: {
    path: resolvePath('dist'),
    filename: '[name].bundle.js',
  },
};
