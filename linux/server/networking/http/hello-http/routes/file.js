const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/uploadImg', (req, res, next) => {
  // form-data 参数 body-parser 不处理
  res.setHeader('x-location','123')
  res.send({
    data: 'Omg six',
  });
})

router.put('/uploadImg', (req, res, next) => {
  // console.log(1111, req)
  res.setHeader('x-location','123')
  res.end('234 d')
})

router.post('/getSomeFile', (req, res, next) => {
  const rs = fs.createReadStream(path.resolve(__dirname, '../public/ajax.js'))
  rs.pipe(res);
})



module.exports = router;
