const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.headers['content-type']);
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req.headers['content-type']);
  console.log(req.body)
  res.send('respond with a resource');
});

module.exports = router;
