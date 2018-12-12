var express = require('express')
var router = express.Router()
var CatModel = require('../Model/Model.js')
// var Authentication = require('../../Core/Auth/Authentication')
// var Token = require('../../Core/Auth/Token')
var CatController = require('../Controller/Controller.js')
var RegisterValidation = require('../Validations/CreateValidation')
var DeleteValidation = require('../Validations/DeleteValidation')
var UpdateValidation = require('../Validations/UpdateValidation')
var passport = require('passport')

router.post('/categories', function (req, res, next) {
   RegisterValidation(req)
  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }

    new CatController(new CatModel()).createCat(req,res)
  })
})

router.get('/categories', function (req, res, next) {
    new CatController(new CatModel()).listCat(req,res)
})


router.put('/categories', function (req, res, next) {
  UpdateValidation(req)
  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new CatController(new CatModel()).updateCat(req, res)
  })
})

router.delete('/categories', function (req, res, next) {
    DeleteValidation(req)
      req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
          res.status(400).send(result.array())
          return
        }
        new CatController(new CatModel()).deleteCat(req, res)
  })
})
module.exports = router

