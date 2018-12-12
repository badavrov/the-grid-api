var RegisterValidation = function (req) {
  //isString to isId- sled platforms i category.
  req.check('name', 'Invalid name').isString(req.body.name).isLength({ min: 4 })
  req.checkBody('keywords', 'Is not array').isArray(req.body.keywords)
  for (var index = 0; index < req.body.keywords.length; index++) {
    req.check('keywords','Is empty').isString(req.body.keywords[index])
  }
  req.checkBody('summary', 'Must have summary/Must be longer').isLength({ min: 5 })
  req.checkBody('category', 'Is not array').isArray(req.body.category)
  for (var index = 0; index < req.body.category.length; index++) {
    req.check('category','Is empty').isString(req.body.category[index])
  }
  req.checkBody('platform', 'Is not array').isArray(req.body.platform)
  for (var index = 0; index < req.body.platform.length; index++) {
    req.check('platform','Is empty').isString(req.body.platform[index])
  }
}

module.exports = RegisterValidation
