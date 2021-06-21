var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    data: 'get response111'
  });
});

router.delete('/', function(req, res, next) {
  // string 类型不会自动添加 Content-Type: application/json;
  res.send(JSON.stringify({
    data: 'delete response'
  }));
});

router.post('/', function(req, res, next) {
  console.log(req.body)

  res.send({
    data: req.body
  });
});

router.put('/', function(req, res, next) {
  console.log(req.body)
  res.send({
    data: 'put response'
  });
});

module.exports = router;
