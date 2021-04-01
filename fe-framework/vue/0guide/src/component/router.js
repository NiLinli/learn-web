import Vue from 'vue';
import VueRouter from 'vue-router';
import StateExp from './state-exp';
import PropsExp from './props-exp';
import EventExp from './event-exp';
import DirectiveExp from './directive-exp';
import FilterExp from './filter-exp';
import SlopExp from './slot-exp';
import RefExp from './ref-exp';
import MixinExp from './mixin-exp';
import FunctionalExp from './functional-exp'
import RenderExp from './render-exp';
import AsyncExp from './async-exp'

import FormExp from './form-exp';

const routes = [
  { path: '/', redirect: '/props' },
  { path: '/props', component: PropsExp },
  { path: '/state', component: StateExp },
  { path: '/event', component: EventExp },
  { path: '/directive', component: DirectiveExp },
  { path: '/filter', component: FilterExp },
  { path: '/slots', component: SlopExp },
  { path: '/ref', component: RefExp },
  { path: '/mixin', component: MixinExp },
  { path: '/functional-component', component: FunctionalExp },
  { path: '/render', component: RenderExp },
  { path: '/async', component: AsyncExp },
  { path: '/form', component: FormExp },
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
});
