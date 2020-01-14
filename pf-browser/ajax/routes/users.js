var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send({
    data: 'get response'
  });
});

router.delete('/', function(req, res, next) {
  console.log(req.query)
  res.send({
    data: 'delete response'
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send({
    data: 'post response'
  });
});

router.put('/', function(req, res, next) {
  console.log(req.body)
  res.send({
    data: 'put response'
  });
});

module.exports = router;
