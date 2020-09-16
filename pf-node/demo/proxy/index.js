const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 9005;

// 设置常规反向代理
const reverseProxy = createProxyMiddleware({
  target: `http://localhost:${port}`,
  changeOrigin: true,
  secure: false,
  pathRewrite: {
    '^/api': '',
  },
  // 如果全局使用 bodyParser 中间件, 会改变转发的 body
  // 所以可以需要转换为原来的样子
  // onProxyReq(proxyReq, req, res, options) {
  //   console.log(req.url);
  //   if (req.body) {
  //     let bodyData = JSON.stringify(req.body);
  //     // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
  //     proxyReq.setHeader('Content-Type', 'application/json');
  //     proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
  //     // stream the content
  //     proxyReq.write(bodyData);
  //   }
  // },
});

const app = express();

// app.use(bodyParser.json());

app.use('/api', reverseProxy);

app.post('/user', bodyParser.json(), function (req, res) {
  console.log(req.body);
  res.send({
    code: 10000,
    message: '创建用户成功',
  });
});

app.listen(port);
