var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

// serve-static
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '60s',
    lastModified: false,
    etag: false,
  })
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
