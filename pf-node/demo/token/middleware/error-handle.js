function errorHandler(err, req, res, next) {
  if (typeof err === 'string') {
    // 自定义应用错误
    return res.status(400).json({ message: err });
  }

  if (err.name === 'UnauthorizedError') {
    // JWT 认证错误
    return res.status(401).json({ message: 'Invalid Token' });
  }

  // 默认处理为 500 服务器错误
  return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;