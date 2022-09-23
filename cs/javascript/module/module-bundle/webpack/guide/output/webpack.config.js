const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
          // 入口 chunk
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
  mode: 'none',
  cache: false,
  entry,
  plugins: [
    // 生成版本管理
    new WebpackManifestPlugin(),
    ...HtmlWebpackPluginInstances,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // [name] chunkName
    // [id] chunkId
    // [hash]/[fullhash] 每次编译产生的hash, 只要有任何文件改动, 都会改变
    // [chunkhash]       同一个 chunk 所产生的 bundle 的 hash
    // [contenthash]     每个 bundle 自身的 hash
    filename: '[name].[contenthash].bundle.js',
    // v5.20 替代 CleanWebpackPlugin
    clean: true,    
    // 设置 baseUrl 
    // publicPath: '/web/', 
  },
};
