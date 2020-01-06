import Vue from 'vue';
import VueRouter from 'vue-router';
import SlopExp from './slot-exp';
import RenderExp from './render-exp';

const routes = [
  { path: '/', redirect: '/slots' },
  { path: '/slots', component: SlopExp }, 
  { path: '/render', component:  RenderExp }
];

Vue.use(VueRouter);

export default new VueRouter({
  routes
});