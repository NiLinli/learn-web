const express = require('express');

const router = express.Router();



router.get('/urlencoded', (req, res, next) => {

  res.send(req.query);
});

module.exports = router;
