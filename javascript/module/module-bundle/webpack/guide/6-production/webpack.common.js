var path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:  path.resolve(__dirname, './src/index.js'),
    plugins: [
		  new CleanWebpackPlugin({
		  	cleanAfterEveryBuildPatterns: ['dist']
		  }),
      new HtmlWebpackPlugin({
          title: 'Production'
      })
    ],

};