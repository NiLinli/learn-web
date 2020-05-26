import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 全局注册
// kebab-case - Angular
Vue.component('component-a', {
  template: '<p>a</p>'
});

// PascalCase - React
Vue.component('ComponentB', {
  template: '<p>b</p>'
});

Vue.component('component-c', {
  template: '<p>c</p>'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
