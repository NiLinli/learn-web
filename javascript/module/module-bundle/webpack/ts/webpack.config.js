const path = require('path');

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  mode: 'development',
  devtool: false,
  entry: resolvePath('./src/index.ts'),
  output: {
    filename: 'main.bundle.js',
    path: resolvePath('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
