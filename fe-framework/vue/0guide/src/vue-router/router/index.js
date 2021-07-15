import Vue from 'vue';
import VueRouter from 'vue-router';

import Person from '@/vue-router/views/Person';
import NotFound from '@/vue-router/views/NotFound';
import User from '@/vue-router/views/User';
import UserPosts from '@/vue-router/views/UserPosts';
import UserProfile from '@/vue-router/views/UserProfile';
import Help from '@/vue-router/views/Help';

Vue.use(VueRouter);

const routes = [
  // 路由 params 匹配
  {
    path: '/p/:username',
    name: 'p', // 命名路由
    component: Person,
  },
  {
    path: '/p/:username/age/:age',
    component: Person,
  },

  // 路由嵌套
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'posts', component: UserPosts },
    ],
  },

  // 不支持无组件路由
  {
    path: '/test-user',
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'posts', component: UserPosts },
    ],
  },

  // 命名路由
  {
    path: '/name-route',
    components: {
      default: Person,
      helper: Help,
    },
  },

  // 重定向
  {
    path: '/test-redirect',
    redirect: '/name-route',
  },
  {
    path: '/test-redirect-object',
    redirect: {
      name: 'p',
      params: {
        username: '倪西西',
      },
    },
  },
  {
    path: '/test-redirect-function',
    redirect: (to) => {
      const { hash, params, query } = to;
      // 更加灵活
      return {
        name: 'p',
        params: {
          username: '倪西西',
        },
      };
    },
  },

  // prop
  {
    path: '/test-prop-true/:id',
    component: User,
    props: true
  },
  {
    path: '/test-prop-object/:id',
    component: User,
    props: {
      id: 10000
    }
  },
  {
    path: '/test-prop-function/:id',
    component: User,
    props: (to) => {
      const { hash, params, query } = to;
      // 更加灵活
      return {
        ...params
      };
    },
  },

  // * 匹配所有 route , 放在最后做为 404 (匹配优先级, 从上到下)
  { path: '*', component: NotFound },
];

export default new VueRouter({
  routes,
});
