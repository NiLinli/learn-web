const expressJwt = require('express-jwt');
const { secret } = require('config.json');


function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  // 返回了两个中间件函数
  return [
    // 1 认证 JWT 令牌，并向请求对象附加用户 (req.user)
    expressJwt({ secret }),
    // 2 判断是否 401
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(401).json({ message: 'UnAuthorized' });
      }
      next();
    }
  ] 
}

module.exports = authorize;

