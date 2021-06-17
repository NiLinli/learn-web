const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// cors
// 区分 options 请求和其他请求，配置 cors header
// 禁止跨域的请求服务器不响应实际请求，避免影响服务器数据

const whitelist = ['http://localhost:8088']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use(express.static(path.resolve(__dirname, './assets'), {}));

app.all('/simple', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', whitelist);
  console.log('simple 执行了');
  res.send('简单请求');
});

app.options('/unsimple', (req,res) => {
  // res.setHeader('Access-Control-Allow-Origin', whitelist);
  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
  // res.setHeader('Access-Control-Max-Age', '60');
  res.status(204).end();
})

app.post('/unsimple', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', whitelist);
  console.log('unsimple 执行了');
  res.send('非简单请求');
})

app.listen(9088);
