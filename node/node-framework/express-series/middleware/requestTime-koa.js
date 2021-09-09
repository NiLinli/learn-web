const requestTime = async function (context, next) {
  
  const { req, res } = context;

  const header = 'X-Response-Time';
  res.setHeader(header, new Date());
  await next();
}

module.exports = requestTime;
