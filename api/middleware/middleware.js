function logger(req, res, next) {
 console.log(`[${req.method}]: ${req.path}, ${Date()}`);
 next()
}

function validateUserId(req, res, next) {
 console.log('howdy from ValidateUserId')
 next()
}

function validateUser(req, res, next) {
  console.log('howdy from ValidateUser')
  next()
}

function validatePost(req, res, next) {
  console.log('howdy from ValidatePost')
  next()
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}