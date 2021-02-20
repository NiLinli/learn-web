import Vue from 'vue';
import VueRouter from 'vue-router';
import Person from '../views/Person';
import NotFound from '../views/NotFound';

import User from '../views-nested/User';
import UserPosts from '../views-nested/UserPosts';
import UserProfile from '../views-nested/UserProfile';


Vue.use(VueRouter);

const routes = [
  // 路由 params 匹配
  { 
    path: '/p/:username',
    name: 'p',      // 命名路由
    component: Person 
  },
  { path: '/p/:username/age/:age', component: Person },

  // 路由嵌套
  { 
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'posts', component: UserPosts }
    ]
  },

  // 无组件路由 (不支持)
  {
    path: '/test-user',
    children: [
      { path: 'profile', component: UserProfile },
      { path: 'posts', component: UserPosts }
    ]
  },

  { path: '*', component: NotFound }  // * 匹配所有 route , 放在最后做为 404 (匹配优先级, 从上到下)
];

export default new VueRouter({
  routes
});