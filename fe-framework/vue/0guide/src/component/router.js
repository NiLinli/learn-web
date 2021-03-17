import Vue from 'vue';
import VueRouter from 'vue-router';
import StateExp from './state-exp';
import PropsExp from './props-exp';
import SlopExp from './slot-exp';
import RenderExp from './render-exp';
import FormExp from './form-exp';
import RefExp from './ref-exp';

const routes = [
  { path: '/', redirect: '/props' },
  { path: '/props', component: PropsExp },
  { path: '/state', component: StateExp },
  { path: '/slots', component: SlopExp },
  { path: '/render', component: RenderExp },
  { path: '/form', component: FormExp },
  { path: '/ref', component: RefExp },
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
});
