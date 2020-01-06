const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'production',
	entry: {
		app: path.resolve(__dirname, './src/index.js')
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
			title: 'Caching'
		}),
	],
	optimization: {
		// moduleIds: 'hashed',
		runtimeChunk: 'single',		// 将 runtime + manifest 分离到 runtime.js 中
		splitChunks: {
			cacheGroups: {
				// vendor bundle 会随着自身的 module.id 的变化，而发生变化, 需要 fix
				// production 采用数字作为 moduleId, 会变化
				// development 是字符串作为 key , 不会有这个问题
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js'
	}
}

// contenthash 根据文件内容变化而变化
// 理论上: 文件发生变化了, contenthash 才会有变化
// 实际上：不能确保, 文件名可能发生变化, 因为文件中包含 runtime 和 manifest (webpack 打包版本不同, 会有差异)
// 结论： 提取引导模板  runtime + manifest 