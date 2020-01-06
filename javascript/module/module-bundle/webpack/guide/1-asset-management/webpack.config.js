var path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      }, 
      // image
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      }, 
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
      // xml
      {
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
      }
    ]
  }
}