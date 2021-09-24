const express = require('express');
const error = require('./middleware/error');

const app = express();

app.use('/error', error, function (req, res) {
  res.send('Hello express error');
});

app.use('/', function (req, res) {
  app;
  res.send('Hello express');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8072);
