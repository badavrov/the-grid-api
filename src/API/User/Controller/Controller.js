'use strict'

var mongoose = require('mongoose')
var UserModel = require('../Model/Model.js')

class userController {
  constructor(userAuth) {
    this.userSchema = mongoose.model('user')

    this.userAuth = userAuth
    this.model = new UserModel()
  }

  listUsers(req, res) {
    let that = this
    this.userAuth.getByToken(req)
      .then(function (user) {
        that.model.listUsers()
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
      })

      .catch(function (error) {
        if (error) { return res.json('Authorization error') }
      })
  }

  updateUser(req, res) {
    let that = this
    this.userAuth.getByToken(req)
      .then(function (user) {
        that.model.updateUser(req.body, user._id)
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
      })

      .catch(function (error) {
        if (error) { return res.json('Authorization error') }
      })
  }

  deleteUser(req, res) {
    let that = this
    this.userAuth.getByToken(req)
      .then(function (user) {
        that.model.deleteUser(user._id, req.body.id, res)
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })

      })

      .catch(function (error) {
        if (error) { return res.json('Authorization error') }
      })
  }
}

module.exports = userController
