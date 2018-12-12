var RegisterValidation = function (req) {
    req.check('name', 'Invalid name').isString(req.body.name)
  }
  
  module.exports = RegisterValidation
  