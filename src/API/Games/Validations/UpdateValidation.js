var UpdateValidation = function (req) {
    req.check('id', 'Invalid ID').isID(req.body.id)
    if (req.body.name) { req.check('name', 'Invalid name').isString(req.body.name).isLength({ min: 3 }) }
    if (req.body.platform) { req.checkBody('platform', 'Invalid platform').isString(req.body.platform) }
    if (req.body.keywords) { req.checkBody('keywords', 'Invalid keywords').notNull() }
}

module.exports = UpdateValidation
