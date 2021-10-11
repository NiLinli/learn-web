import { createApp, Component } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import './reactive/index';

const app = createApp(App);

// 配置都是 app 层面的
app.use(ElementPlus);
app.mount('#app');

// 如果想实现 Vue2.0 全局配置的方式, 可以使用工厂函数
// const createMyApp = (options: Component) => {
//   const app = createApp(options);
//   app.directive('focus', function (val) { });
//   // ...
//   return app;
// };

// createMyApp(App).mount('#foo');
// createMyApp(App).mount('#bar');