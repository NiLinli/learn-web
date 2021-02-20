// 会被 webpack-merge 合并

module.exports = {
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    component: {
      entry: 'src/component/main.js',
      template: 'public/index.html',
      filename: 'component.html',
      title: 'Component',
      chunks: ['chunk-vendors', 'chunk-common', 'component']
    },
    vuex: {
      entry: 'src/vuex/main.js',
      template: 'public/index.html',
      filename: 'vuex.html',
      title: 'Vuex',
      chunks: ['chunk-vendors', 'chunk-common', 'vuex']
    },
    'vue-router': {
      entry: 'src/vue-router/main.js',
      template: 'public/vue-router.html',
      filename: 'vue-router.html',
      title: 'Vue Router',
      chunks: ['chunk-vendors', 'chunk-common', 'vue-router']
    },
  }
};