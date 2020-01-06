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
	plugins: [
		// 生成版本管理
		new ManifestPlugin(),
		// 清理文件夹
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		}),
		// 生成新的 HTML 文件
		new HtmlWebpackPlugin({
			title: 'Output Mannagement'
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	}
}