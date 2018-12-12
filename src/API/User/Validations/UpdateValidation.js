var UpdateValidation = function (req) {
    req.check('id', 'Invalid ID').isID(req.body.id)
    if (req.body.name) { req.check('name', 'Invalid name').isString(req.body.name).isLength({ min: 4 }) }
    if (req.body.email) { req.checkBody('email', 'Invalid email').isEmail(req.body.email) }
    if (req.body.password) { req.checkBody('password', 'Invalid password').isLength({ min: 5 }) }
}

module.exports = UpdateValidation
