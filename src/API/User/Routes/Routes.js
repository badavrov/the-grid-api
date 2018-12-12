var express = require('express')
var router = express.Router()
var UserModel = require('../Model/Model.js')
var Authentication = require('../../Core/Auth/Authentication')
var Token = require('../../Core/Auth/Token')
var User = require('../Model/Model')
var UserAuth = require('../../Core/Auth/User')
var UserController = require('../Controller/Controller.js')
var RegisterValidation = require('../Validations/RegisterValidation')
var LoginValidation = require('../Validations/LoginValidation')
var DeleteValidation = require('../Validations/DeleteValidation')
var UpdateValidation = require('../Validations/UpdateValidation')
var passport = require('passport')

router.post('/users', function (req, res, next) {
  RegisterValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new UserModel().register(req.body, res)
  })
})

router.post('/login', function (req, res, next) {
  LoginValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new UserModel().login(req, res)
  })
})

router.get('/users', function (req, res, next) {
  new UserController(new UserAuth(new Authentication(), new Token(), new User())).listUsers(req, res)
})

router.put('/users', function (req, res, next) {
  UpdateValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }

    new UserController(new UserAuth(new Authentication(), new Token, new User())).updateUser(req, res)
  })
})



router.delete('/users', function (req, res, next) {
  DeleteValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new UserController(new UserAuth(new Authentication(), new Token(), new User())).deleteUser(req, res)
  })
})
console.log('-----User routes loaded');
module.exports = router


