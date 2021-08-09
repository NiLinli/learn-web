var path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  path.resolve(__dirname, './src/index.js'),
    plugins: [
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		}),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            title: 'Tree Shaking'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[chunkhash].js'
    }
};