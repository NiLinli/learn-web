const express = require('express');
const router = express.Router();


router.post('/uploadImg', (req, res, next) => {
  console.log(req);
  res.send({
    data: 'Omg six'
  })
})

module.exports = router;
