const Vue = require('vue');

exports.createApp = function createApp(context = {}) {
  const app = new Vue({
    data: context,
    template: `<div>访问的 URL 是： {{ url }}</div>`,
  });

  return { app };
};
