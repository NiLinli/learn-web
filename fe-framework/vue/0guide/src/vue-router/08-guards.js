var A = {
  template: `
    <div>
      <p>A</p>
      <button @click="gotoB">go to B</button>
    </div>
  `,
  methods: {
    gotoB() {
      this.$router.push({path: '/b'})
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('a beforeRouteLeave', to, from, history.length);
    next(true);
  }
};

var B = {
  template: `
    <div>B 里面有很多表单可以填</div>
  `,
  beforeRouteEnter (to, from, next) {
    // 不能使用 this 组件没有被实例化
    console.log('b beforeRouteEnter');
    next();
  },
  // 路由复用 参数变化 this 可以访问
  beforeRouteUpdate (to, from, next) {
    console.log('b beforeRouteUpdate');
    next();
  }
};

var router = new VueRouter({
  routes: [
    { 
      path: '/',
      component: A,
    },
    { 
      path: '/b',
      component: B,
      beforeEnter: (to, from, next) => {
        console.log('b beforeEnter', to, next,  history.length);
        next();
      }
    }
  ]
});

// 前置守卫
router.beforeEach((to, from, next) => {
  console.log('global beforeEach', to, from, history.length);
  next();
});

// 解析守卫
router.beforeResolve((to, from, next) => {
  console.log('global beforeResolve', to, from, history.length);
  next();
});

// 后置钩子
router.afterEach((to, from) => {
  // 确认导航前的最后一个钩子
  // 不能改变导航事实
  console.log('global afterEach', to, from);
  setTimeout(() => console.log(history.length), 0);
});

new Vue({ router }).$mount('#app');