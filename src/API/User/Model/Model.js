'use strict'

var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')
var hashPassword = require('../../Core/Auth/HashPassword')

class UserModel {
  constructor() {
    this.UserSchema = mongoose.model('user')
  }


  register(data, res) {
    let that = this
    var user = new that.UserSchema()

    user.name = data.name
    user.email = data.email
    user.password = hashPassword.saltHashPassword(data.password)
    user.userCreated = moment().format('YYYY-MM-DD HH:mm:ss')

    user.save(function (error, result) {
      if (error) {
        if (res) { res.json(Boom.badRequest(error).errmsg) }
      }
      if (res) { res.json(result) }
    })
  }

  /** Login user */
  login(req, res) {
    this.UserSchema.findOne({ email: req.body.email }, function (error, result) {
      /** simulate express error response */
      let errArr = [{}]
      // let host = req.get('host')

      if (error || !result) {
        errArr[0].msg = 'Invalid email'
        errArr[0].param = 'email'
        errArr[0].value = req.body.email
        return res.status(400).send(errArr)
      }
      if (result.password !== hashPassword.saltHashPassword(req.body.password)) {
        errArr[0].msg = 'Invalid password'
        errArr[0].param = 'password'
        errArr[0].value = ' '
        return res.status(400).send(errArr)
      }
      var privateKey = 'BbZsdsdsdsdJjyoasdXAdadar8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc'
      var token = jwt.sign({ accountId: result._id }, privateKey, { algorithm: 'HS256' })
      return res.json({ token: token, user: result })
    })
  }

  listUsers() {
    let that = this
    let tempArr = []

    return new Promise(function (resolve, reject) {
      that.UserSchema.find({}, function (err, users) {
        if (err) return reject(Boom.badRequest(err))

        for (let i = 0; i < users.length; i++) {
          if (users[i].deleted === false) {
            tempArr.push(users[i])
          }
        }
        resolve(tempArr)
      })
        .catch(function (error) {
          return reject(Boom.badRequest(error))
        })
    })
  }

  // updateUser(currUserId, data, res) {
  //   let that = this

  //   return new Promise(function (resolve, reject) {
  //     that.UserSchema.findById({ _id: data.id }, function (err, user) {
  //       if (err) { console.log(err) }
  //       if (currUserId != data.id) return reject(res.status(400).send(`You can't edit other users!`))
  //       user.name = data.name
  //       user.email = data.email
  //       user.password = hashPassword.saltHashPassword(data.password)
  //       user.userModified = moment().format('YYYY-MM-DD HH:mm:ss')
  //       console.log(user)
  //       user.save(function (error, result) {
  //         console.log('result ',result)
  //         console.log('err ', error)
  //         if (error) { res.json(Boom.badRequest(error).errmsg) }
  //         res.json(result)
  //       })
  //     })
  //   })
  // }

  updateUser(data, currUserId) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.UserSchema.findById({ _id: data.id }, function (err, user) {
        if (user == null) { return reject(Boom.badRequest('No user with that ID')) }
        if (err) return reject(Boom.badRequest('There was a problem with the user'))
        if (currUserId != data.id) return reject(Boom.badRequest(`You can't edit other users!`))

        let dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
          let prop = dataKeys[i]
          let val = data[prop]

          if (prop !== 'id') {
            if (typeof user[prop] !== 'undefined') {
              user[prop] = val
            }
          }
        }

        user.userModified = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(user)
        user.save(function (error, result) {
          if (error) {
            return reject(Boom.badRequest('There was a problem with updating the user'))
          }
          return resolve(result)
        })
      })
    })
  }


  deleteUser(currUserId, id, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.UserSchema.findOne({ _id: id }, function (err, user) {
        if (err) { console.log(err) }
        if (currUserId === id) return reject(res.status(400).send(`You can't delete yourself`))
        user.deleted = true

        user.save(function (error, result) {
          if (error) { res.json(Boom.badRequest(error).errmsg) }
          res.json(result)
        })
      })
    })
  }
}
module.exports = UserModel
