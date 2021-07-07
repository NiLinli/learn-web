const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/uploadImg', (req, res, next) => {
  res.send({
    data: 'Omg six'
  })
})

router.post('/getSomeFile', (req, res, next) => {
  const rs = fs.createReadStream(path.resolve(__dirname, '../public/ajax.js'))
  rs.pipe(res);
})


module.exports = router;
