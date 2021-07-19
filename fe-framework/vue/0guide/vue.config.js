const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
  },
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    component: {
      entry: 'src/component/main.js',
      template: 'public/index.html',
      filename: 'component.html',
      title: 'Component',
      chunks: ['chunk-vendors', 'chunk-common', 'component'],
    },
    vuex: {
      entry: 'src/vuex/main.js',
      template: 'public/index.html',
      filename: 'vuex.html',
      title: 'Vuex',
      chunks: ['chunk-vendors', 'chunk-common', 'vuex'],
    },
    'vue-router': {
      entry: 'src/vue-router/main.js',
      template: 'public/index.html',
      filename: 'vue-router.html',
      title: 'Vue Router',
      chunks: ['chunk-vendors', 'chunk-common', 'vue-router'],
    },
    'vue-router-guards': {
      entry: 'src/vue-router-guards/main.js',
      template: 'public/index.html',
      filename: 'vue-router-guards.html',
      title: 'Vue Router Guards',
      chunks: ['chunk-vendors', 'chunk-common', 'vue-router-guards'],
    },
    'vue-router-ka': {
      entry: 'src/vue-router-ka/main.js',
      template: 'public/index.html',
      filename: 'vue-router-ka.html',
      title: 'Vue Router Keep Alive',
      chunks: ['chunk-vendors', 'chunk-common', 'vue-router-ka'],
    }
  },
};
