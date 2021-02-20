const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  console.log(req.session)
  const pathname = parseurl(req).pathname;

  // count the view
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});

app.get('/foo', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
});

app.get('/bar', function(req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
});

app.get('/cookies', (req, res) => {
  const product_id = 123452020;
  res.setHeader('Set-Cookie', [`product_id=${product_id}`]);
  res.send(product_id + '');
})

app.listen(3000);