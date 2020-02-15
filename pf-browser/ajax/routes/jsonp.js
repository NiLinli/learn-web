var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let callback = req.query.callback;
  let returnString = `${callback}(${JSON.stringify(req.query)})`;
  res.send(returnString);
});

module.exports = router;
