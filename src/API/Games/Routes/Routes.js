var express = require('express')
var router = express.Router()
var GameModel = require('../Model/Model.js')
// var Authentication = require('../../Core/Auth/Authentication')
var Game = require('../Model/Model')
// var gameAuth = require('../../Core/Auth/User')
var GameController = require('../Controller/Controller.js')
var UpdateValidation = require('../Validations/UpdateValidation')
var RegisterValidation = require('../Validations/RegisterValidation')
var DeleteValidation = require('../Validations/DeleteValidation')

router.post('/games', function (req, res, next) {
   RegisterValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new GameController(new Game()).createGame(req,res)
  })
})

router.get('/games', function (req, res, next) {
  new GameController(new Game()).listGames(req, res)
})


router.put('/games', function (req, res, next) {
  UpdateValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new GameController(new Game()).updateGame(req, res)
  })
})

router.delete('/games', function (req, res, next) {
  DeleteValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new GameController(new Game()).deleteGame(req, res)
  })
})
console.log('-----User routes loaded');
module.exports = router


