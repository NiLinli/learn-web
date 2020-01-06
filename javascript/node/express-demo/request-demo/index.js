const express = require('express');
const request = require('request');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

const accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/search_airport/:q', (req, res) => {
  console.log(req.params.q);
  // const esReqBody = {
  //   q: 
  // }

  request.get({
    url: 'https://h5.133.cn/hangban/basic/search_airport',
    qs: {
      q: req.params.q
    }
  }, 
    (err, esRes, esResBody) => {
    if (err) {
      return res.status(502).json({
        error: 'bad_geteway',
        reason: ''
      })
    }

    if (esRes.statusCode !== 200) {
      res.status(esRes.statusCode).json(esResBody);
    } else {
      res.status(200).json(esResBody)
    }

  })
}).listen(8081)