import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Form from '../views/Form.vue';
import UserInfo from '../views/UserInfo.vue';
import Success from '../views/Success.vue';

Vue.use(VueRouter);

function waitNetWork() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
}

const routes = [
  { path: '/index', component: Index },
  { path: '/login', component: Login },
  { path: '/form', component: Form },
  {
    path: '/user',
    component: UserInfo,
    meta: { auth: true },
    beforeEnter(to, from, next) {
      console.log('beforeEnter');
      next();
    },
  },
  {
    path: '/random',
    // 不支持异步
    // redirect: to => {
    //   waitNetWork()
    //     .then(() => {
    //       if(Math.random() > 0.5) {
    //         return '/index';
    //       } else {
    //         return '/form';
    //       }
    //     })
    // },
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter');
      waitNetWork().then(() => {
        if (Math.random() > 0.5) {
          next('/index');
        } else {
          next('/form');
        }
      });
    },
  },
  // 测试 resolve 不成功
  { path: '/beforeEachFail', component: Success },
  { path: '/beforeEnterFail', beforeEnter: (to, from, next) => next(false) },
  { path: '/beforeRouteEnterFail', component: Success },
  { path: '/beforeResolveFail', component: Success },
  { path: '', redirect: '/index' },
];

const router = new VueRouter({ routes });

// 前置守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.path, from.path, history.length);

  if (to.path === '/beforeEachFail') {
    debugger;
    return next(false);
  }

  const isLogin = window.isLogin;
  if (to.matched.some((m) => m.meta.auth) && !isLogin) {
    const redirectURL = to.path;
    next({
      path: '/login',
      query: { redirectURL },
    });
  } else {
    next();
  }
});

// 解析守卫
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve', to.path, from.path, history.length);
  if (to.path === '/beforeResolveFail') {
    next(false);
  } else {
    next();
  }
});

// 后置钩子 不能改变导航事实
router.afterEach((to, from) => {
  console.log('afterEach', to.path, from.path, history.length);
  setTimeout(() => console.log(history.length), 0);
});

export default router;
