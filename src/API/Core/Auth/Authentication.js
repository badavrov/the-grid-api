'use strict'

var mongoose = require('mongoose')
var Token = require('./Token')

class Authentication {
  constructor () {
    this.userSchema = mongoose.model('user')
  }

  accessToken (token, callback) {
    var decode = Token.decode(token)
    var that = this
    var user = that.userSchema

    Token.isAccessTokenValidPromise(decode, {})

    user.findOne({ _id: decode.accountId }, function (err, userResult) {
      if (err) {
        return callback(err, null)
      } else {
        return callback(null, userResult)
      }
    })
  }
}

module.exports = Authentication
