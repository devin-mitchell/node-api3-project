const Users = require('../users/users-model')

function logger(req, res, next) {
 console.log(`[${req.method}]: ${req.path}, ${Date()}`);
 next()
}

function validateUserId(req, res, next) {
  console.log('howdy from ValidateUserId')
  Users.getById(req.params.id)
    .then(user => {
      if(!user) {
        res.status(404).json({
          message: "user not found",
        })
      } else {
        req.user = user
        next()
      }
    })
    .catch(next)
}

function validateUser(req, res, next) {
  console.log('howdy from ValidateUser')
  if (!req.body.name) {
    res.status(400).json({
      message: "missing required name field"
    })
  } else {
    req.user = {name: req.body.name.trim()}
    next()
  }
}

function validatePost(req, res, next) {
  console.log('howdy from ValidatePost')
  if(!req.body.text) {
    res.status(400).json({
      message: 'missing required text field'
    })
  } else {
    next()
  }
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}