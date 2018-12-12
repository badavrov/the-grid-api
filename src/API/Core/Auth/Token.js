'use strict'

var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var User = require('../../User/Model/Model')

class Token {
  userAuth (server) {
    server.auth.strategy('token', 'jwt', {

      key: 'BbZsdsdsdsdJjyoasdXAdadar8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc',
      validateFunc: function (request, decodedToken, callback) {
        new User().validateUser(decodedToken, function (valid) {
          if (!valid) {
            let errString = 'Token is not valid'
            return callback(errString, false, decodedToken)
          }
          return callback(null, true, decodedToken)
        })
      },
      verifyOptions: { algorithms: ['HS256'] }
    })
  }

  static decode (token) {
    return jwt.decode(token)
  }

  getRequestToken (request) {
    return require('../../../../node_modules/hapi-auth-jwt2/lib/extract.js')(request, { 'urlKey': null, 'cookieKey': null })
  }

  static isAccessTokenValidPromise (decoded, request) {
    return function (resolve, reject) {
      Token.isAccessTokenValid(decoded, request, function (error, valid) {
        if (error) { console.log(error) }
        resolve(valid)
      })
    }
  }

  static isAccessTokenValid (decoded, request, callback) {
    var user = mongoose.model('user')

    if (user._id === decoded._id && user.email === decoded.email && user.username === decoded.username) {
      return callback(null, true)
    } else {
      return callback(null, false)
    }
  }
}

module.exports = Token
