import Vue from 'vue';
import App from './App';
import store from './store';

console.log(store);

store.commit('user/CHANGE_NAME', 'nilinli');

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');