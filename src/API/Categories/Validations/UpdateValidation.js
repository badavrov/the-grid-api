var UpdateValidation = function (req) {
    req.check('id', 'Invalid ID').isID(req.body.id)
    if (req.body.name) { req.check('name', 'Invalid name').isString(req.body.name).isLength({ min: 1 }) }
}

module.exports = UpdateValidation
