'use strict'

var crypto = require('crypto')

class HashPassword {
  sha512 (password, salt) {
    return crypto.createHash('sha512').update(password + salt, 'utf8').digest('hex')
  }

  saltHashPassword (userpassword) {
    var salt = 'vqweVqe2v%!3v1qvwevwqVQwevpo'
    var passwordData = this.sha512(userpassword, salt)

    return passwordData
  }
}

module.exports = new HashPassword()
