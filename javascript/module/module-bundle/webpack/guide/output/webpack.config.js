const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const pages = {
  crm: {
    entry: require.resolve('./src/crm/index.js'),
  },
  dms: {
    entry: require.resolve('./src/dms/index.js'),
  },
};

function resolveEntry() {
  let entry = {};
  let HtmlWebpackPluginInstances = [];
  for (const name in pages) {
    if (Object.hasOwnProperty.call(pages, name)) {
      const page = pages[name];
      entry[name] = page.entry;
      HtmlWebpackPluginInstances.push(
        new HtmlWebpackPlugin({
          title: 'name',
          // template: `public/${name}.html`,
          template: require.resolve('./public/index.html'),
          filename: `${name}.html`,
          // chunks : ['chunk-vendors', 'chunk-common', name],
          chunks: [name],
          minify: false,
        })
      );
    }
  }

  return { entry, HtmlWebpackPluginInstances };
}

const { entry, HtmlWebpackPluginInstances } = resolveEntry();

module.exports = {
  mode: 'development',
  entry,
  plugins: [
    // 生成版本管理
    new WebpackManifestPlugin(),
    // 清理文件夹
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    // 生成新的 HTML 文件
    // 引入 js
    // 使用 MiniCssExtractPlugin 提取的 CSS
    // ...
    ...HtmlWebpackPluginInstances,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
