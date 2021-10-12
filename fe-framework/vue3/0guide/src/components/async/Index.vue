<script >
// Vue2.0
// component 简写
// export default () => import('./Content.vue')
// component 支持 Promise callback 代替 Promise 
// export default (resolve, reject) => {}
// export default {
//   component: () => import('./Content.vue'),
//   // ...
// }

// Vue3.0
// 支持简写 component key => loader key

import { defineAsyncComponent } from 'vue';
import Error from './Error.vue';
import Loading from './Loading.vue';

export default defineAsyncComponent({
  loader: () => import('./Content.vue'),
  // 必须返回 Promise
  // loader: () => new Promise((resolve, reject) => {
  //   // ...
  // }),
  // loading delay 显示
  delay: 6000,
  timeout: 10000,
  errorComponent: Error,
  loadingComponent: Loading,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry();
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail();
    }
  }
})

</script>