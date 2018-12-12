'use strict'

var mongoose = require('mongoose')
var CatModel = require('../Model/Model.js')

class CatController {
  constructor() {
    this.CatSchema = mongoose.model('category')

    this.model = new CatModel()
  }

  listCat(req, res) {
    let that = this
    that.model.listCat()
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }


  createCat(req, res) {
    let that = this
    that.model.createCat(req.body, res)
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }

  updateCat(req, res){
    let that = this
    that.model.updateCat(req.body, res)
      .then(function (result) { res.json(result) })
      .catch(function (error) { res.status(400).json(error) })
  }

  deleteCat(req, res) {
    let that = this

      that.model.deleteCat(req.body.id, res)
        .then(function (result) { res.json(result) })
        .catch(function (error) { res.status(400).json(error) })
    }
  }

module.exports = CatController
