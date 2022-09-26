const requestTime = function (req, res, next) {
  // have access to 
  // 1. the request object,
  // 2. the response object,
  // 3. the next middleware function in the stack,

  const header = 'X-Response-Time';
  res.setHeader(header, new Date());
  next();
}

module.exports = requestTime;
