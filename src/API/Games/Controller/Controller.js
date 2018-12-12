'use strict'

var mongoose = require('mongoose')
var GameModel = require('../Model/Model.js')

class gameController {
  constructor(/*gameAuth*/) {
    this.gameSchema = mongoose.model('game')

    //  this.gameAuth = gameAuth
    this.model = new GameModel()
  }

  listGames(req, res) {
    let that = this
    that.model.listGames()
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }


  createGame(req, res) {
    let that = this

    that.model.register(req.body, res)
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }

  updateGame(req,res){
    let that = this
      that.model.updateGame(req.body, res)
        .then(function (result) { res.json(result) })
        .catch(function (error) { res.status(400).json(error) })
  }

  deleteGame(req, res) {
    let that = this
    that.model.deleteGame(req.body.id, res)
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }
}


module.exports = gameController
