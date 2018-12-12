/* jslint node: true */
'use strict'

var Promise = require('promise')
var Boom = require('boom')

class User {
  constructor (authentication, token, user) {
    this.authentication = authentication
    this.token = token
    this.user = user
  }

  /** Gets user by bearer JWT */
  getByToken (request, callback) {
    var that = this
    return new Promise(function (resolve, reject) {
      that.authentication.accessToken(that.token.getRequestToken(request), function (error, user) {
        (error) ? reject(Boom.badRequest(error.toString())) : resolve(user)
      })
    })
  }
}

module.exports = User
