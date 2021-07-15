const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
});
const { createApp } = require('./app');

server.get('*', (req, res) => {
  // 交叉请求状态污染 cross-request state pollution ???
  const appContext = {
    url: req.url,
  };

  const { app } = createApp(appContext);

  // 通过 renderer 生成 html 快照
  const renderContext = {
    title: 'hello vue ssr',
    meta: `
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `,
  };

  renderer.renderToString(app, renderContext, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }
    res.end(html);
  });
});

const PORT = process.env.PORT || 8083;
server.listen(PORT);