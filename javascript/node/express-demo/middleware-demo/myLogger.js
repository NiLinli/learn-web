const myLogger = function (req, res, next) {
  console.log('Logged');
  next();  // Calling this function invokes the next middleware function in the app. 
}

module.exports = myLogger;