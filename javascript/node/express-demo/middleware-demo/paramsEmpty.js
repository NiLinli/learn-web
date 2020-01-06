module.exports = function(paramsArr) {
  return function(req, res, next) {
  
    let emptyParam = '';
    for (let i = 0; i < paramsArr.length; i++) {

      const checkParam = paramsArr[i]; 
      if (!req.query[checkParam]) {
        emptyParam = checkParam;
        break;
      }
    }

    if (emptyParam) {
      res.send({
        msg: `${emptyParam} 不存在`
      })
    } else {
      next();
    }
    
  }
}