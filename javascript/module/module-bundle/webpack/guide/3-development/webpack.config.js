const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
		print: path.resolve(__dirname, './src/print.js')
  },
  devtool: 'inline-source-map',
  // webpack-dev-server
  // 在 localhost:8080 下建立服务, 将 dist 目录下的文件, 作为可访问文件
  // devServer: {
  //   contentBase: './dist'
  // },
	plugins: [
		// 生成版本管理
		new ManifestPlugin(),
		// 清理文件夹
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		}),
		// 生成新的 HTML 文件
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/' 
	}
}