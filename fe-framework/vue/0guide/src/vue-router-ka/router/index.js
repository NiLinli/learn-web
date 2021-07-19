import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import Form from '../views/Form.vue';
import Intro from '../views/Intro.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/index', component: Index },
  { path: '/form', component: Form, meta: { keepAlive: true } },
  { path: '/intro', component: Intro },
  { path: '/', redirect: '/index' }
];

const router = new VueRouter({ routes });

export default router;
