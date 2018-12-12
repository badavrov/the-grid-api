var RegisterValidation = function (req) {
    req.check('name', 'Invalid name').isString(req.body.name).isLength({ min: 4 })
    req.checkBody('email', 'Invalid email').isEmail(req.body.email)
    req.checkBody('password', 'Invalid password').isLength({ min: 5 })
  }
  
  module.exports = RegisterValidation
  