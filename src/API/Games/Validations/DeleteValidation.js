var DeleteValidation = function (req) {
  req.check('id', 'Invalid ID').isID(req.body.id)
}

module.exports = DeleteValidation
