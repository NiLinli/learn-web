const express = require('express');

const app = express();

app.use('/', function (req, res) {
  app;
  res.send('Hello express');
});

app.listen(8072);
