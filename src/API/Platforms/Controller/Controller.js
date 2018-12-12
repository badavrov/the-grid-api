'use strict'

var mongoose = require('mongoose')
var PlatformModel = require('../Model/Model.js')

class platformController {
  constructor() {
    this.platformSchema = mongoose.model('platform')

    this.model = new PlatformModel()
  }

  listPlat(req, res) {
    let that = this
    that.model.listPlat()
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }


  createPlatform(req, res) {
    let that = this
    that.model.createPlatform(req.body, res)
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }

  updatePlat(req,res){
    let that = this
      that.model.updatePlat(req.body, res)
        .then(function (result) { res.json(result) })
        .catch(function (error) { res.status(400).json(error) })
    }

  deletePlat(req, res) {
    let that = this
      that.model.deletePlat(req.body.id, res)
        .then(function (result) { res.json(result) })
        .catch(function (error) { res.status(400).json(error) })
    }
  }

module.exports = platformController
