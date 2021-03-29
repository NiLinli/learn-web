import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 全局注册 Component
// kebab-case - Angular
Vue.component('component-a', {
  template: '<p>a</p>',
});

// PascalCase - React
Vue.component('ComponentB', {
  template: '<p>b</p>',
});

// camel
Vue.component('componentC', {
  template: '<p>c</p>',
});

Vue.config.productionTip = false;

// 全局通信
// $on/$once/$off/$emit
const bus = new Vue();
bus.$on('global-message', (e) => {
  console.log('receive global-message', e);
});
Vue.prototype.$bus = bus;

// 全局混入 mixin
Vue.mixin({
  data() {
    return {
      mixinData: 'gloal-mixin',
    };
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
