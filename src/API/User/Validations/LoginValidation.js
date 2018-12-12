var LoginValidation = function (req) {
    req.checkBody('email', 'Invalid email').isEmail(req.body.email)
    req.checkBody('password', 'Invalid password').isLength({ min: 5 })
  }
  
  module.exports = LoginValidation
  