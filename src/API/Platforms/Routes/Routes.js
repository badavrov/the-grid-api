var express = require('express')
var router = express.Router()
var PlatModel = require('../Model/Model.js')
var Authentication = require('../../Core/Auth/Authentication')
var Token = require('../../Core/Auth/Token')
var PlatController = require('../Controller/Controller.js')
var RegisterValidation = require('../Validations/CreateValidation')
var DeleteValidation = require('../Validations/DeleteValidation')
var UpdateValidation = require('../Validations/UpdateValidation')
var passport = require('passport')
var Promise = require('promise')
var path = require('path')

router.post('/platforms', function (req, res, next) {
  RegisterValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }

    new PlatController(new PlatModel()).createPlatform(req, res)
  })
})

router.get('/platforms', function (req, res, next) {
  new PlatController(new PlatModel()).listPlat(req, res)
})

router.put('/platforms', function (req, res, next) {
  UpdateValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new PlatController(new PlatModel()).updatePlat(req, res)
  })
})

router.post('/upload',function (req,res,next){
  if(!req.files){ return res.status(400)}

  uploadImage(req.files)
  .then(function(path){
    console.log('path ', path)
  })
})

const uploadImage = (file) => {
  let that = this

  return new Promise(function (resolve, reject) {
    /** sets save path for the uploaded image */
    var fullPath = './public/resources/icon/eqweqweqeqeqweqweqw.jpg'
    /** create src path for the react to visualize */
    let image = file.image

    image.mv(fullPath, function (err) {
      if (err) { return reject(err) }
      return resolve(fullPath)
    })
  })
}



router.delete('/platforms', function (req, res, next) {
  DeleteValidation(req)

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send(result.array())
      return
    }
    new PlatController(new PlatModel()).deletePlat(req, res)
  })
})
console.log('-----Platforms routes loaded');
module.exports = router


