const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const pageEntrys = ['index', 'component', 'vuex', 'vue-router', 'vue-router-guards', 'vue-router-ka'];

function resolvePages() {
  const pages = {};

  pageEntrys.forEach((name) => {
    pages[name] = {
      entry: `src/${name}/main.js`,
      template: 'public/index.html',
      filename: `${name}.html`,
      title: `${name.toUpperCase()} Page`,
      // chunks: ['chunk-vendors', 'chunk-common', 'index'],
      chunks: [name],
    };
  });

  return pages;
}

function resolveIndexRoutes() {
  const clonePageEntrys = [...pageEntrys];
  clonePageEntrys.shift();
  return clonePageEntrys.map((name) => {
    return {
      name: name,
      href: `/${name}.html`,
    };
  });
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.INDEX_ROUTES': JSON.stringify(resolveIndexRoutes()),
      }),
    ],
    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
  },
  pages: resolvePages(),
};
