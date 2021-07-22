import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import Form from '../views/Form.vue';
import Intro from '../views/Intro.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { keepAlive: true },
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,

  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro,
  },
  {
    path: '/',
    redirect: '/index',
  },
];

const router = new VueRouter({ routes });

export default router;
