const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// 配置页面 生成 entry
const pages = fs.readdirSync('./src');

const exsitPages = pages.reduce((acc, cValue) => {
  const mainJsPath = `./src/${cValue}/main.js`;
  const projectConfig = require(`./src/${cValue}/project.json`);
  if (fs.existsSync(mainJsPath) && projectConfig.bundle) {
    acc.push(cValue);
  }
  return acc;
}, []);

const htmlArray = exsitPages.map(filename => ({ name: filename, chunks: [filename] }));
const entryPages = exsitPages.reduce((acc, cValue)=> {
  acc[cValue] = `./src/${cValue}/main.js`;
  return acc;
},  {});

console.log(htmlArray, entryPages);

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: {
    ...entryPages
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
		// 生成版本管理
		new ManifestPlugin(),
		// 清理文件夹
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		})
	].concat(htmlArray.map(v => new HtmlWebpackPlugin(getHtmlConfig(v)))),
  resolve: { 
    extensions: ['\*', '.js', '.jsx']
  },
  optimization: {
    moduleIds: 'hashed',
		runtimeChunk: 'single',		// 将 runtime + manifest 分离到 runtime.js 中
		splitChunks: {
			cacheGroups: {
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

function getHtmlConfig (config) {
  const { name, chunks, title = '' } = config;
    return {
        template: `./public/index.html`,
        filename: `${name}.html`,
        title,
        inject: true,
        hash: true, 
        chunks: ['runtime', 'vendors'].concat(chunks),
        // minify: process.env.NODE_ENV === "development" ? false : {
        //     removeComments: true,         // 移除HTML中的注释
        //     collapseWhitespace: true,     // 折叠空白区域 也就是压缩代码
        //     removeAttributeQuotes: true,  // 去除属性引用
        // },
    };
};
