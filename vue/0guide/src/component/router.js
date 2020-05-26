import Vue from 'vue';
import VueRouter from 'vue-router';
import SlopExp from './slot-exp';
import RenderExp from './render-exp';
import FormExp from './form-exp';

const routes = [
  { path: '/', redirect: '/slots' },
  { path: '/slots', component: SlopExp },
  { path: '/render', component: RenderExp },
  { path: '/form', component: FormExp }
];

Vue.use(VueRouter);

export default new VueRouter({
  routes
});