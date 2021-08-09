const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'development',
	entry: {
		polyfills: path.resolve(__dirname, './src/polyfill.js'),
		app: path.resolve(__dirname, './src/index.js'),
	},
	module: {
		rules: [
			// {
			// 	test: require.resolve('./src/index.js'),
			// 	use: ['imports-loader?this=>window'],
			// },
			{
				test: require.resolve('./src/global.js'),
				use: 'exports-loader?file,parse=helpers.parse',
			}
		]
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
			title: 'Shimming'
		}),
		// shim global
		new webpack.ProvidePlugin({
			_: 'lodash'
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	}
}