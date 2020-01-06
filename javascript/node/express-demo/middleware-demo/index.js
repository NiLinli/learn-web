const express = require('express');
const myLogger = require('./myLogger');
const requestTime = require('./requestTime');
const paramsEmpty = require('./paramsEmpty');
const app = express();

// app.use(myLogger);
// app.use(requestTime);

// app.use();

app.get('/', function (req, res) {
  res.send(JSON.stringify({
    msg: 'balabala' + Math.random(),
    timestamp: req.requestTime
  }));
});

app.get('/personInfo', paramsEmpty(['name']), function(req, res) {
  res.send(JSON.stringify({
    name: req.params.name,
    age: 18,
    sex: '男'
  }));
})

app.listen(3000);