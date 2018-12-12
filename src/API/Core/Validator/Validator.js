var mongoose = require('mongoose')

module.exports = {
  customValidators: {
    isString: function (e, name) {
      return (typeof name === 'string')
    },
    isNumber: function (e, value) {
      return (typeof value === 'number')
    },
    isBoolean: function (e, value) {
      return (typeof value === 'boolean')
    },
    isAddress: function (e, address) {
      // let re = new RegExp(/^[a-zA-Z]+(\s+[a-zA-Z]+)+(\s+[a-zA-Z]+)?$/)
      // let re = new RegExp(/[,#-\/\s\!\@\$.....]/)
      // return re.test(address)
      return (typeof address === 'string')
    },
    isWebsite: function (e, website) {
      let re = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/)
      return re.test(website)
    },
    isArray: function (e, value) {
      return Array.isArray(value)
    },
    isPayment: function (e, value) {
      let allPayments = true
      if (typeof value.paypal !== 'boolean' || typeof value.gestpay !== 'boolean') {
        allPayments = false
      }
      if ((value.paypal_username && value.paypal_password && value.paypal_signature) &&
        (typeof value.paypal_username !== 'string' || typeof value.paypal_password !== 'string' || typeof value.paypal_signature !== 'string')) {
        allPayments = false
      }
      return allPayments
    },
    isMaintenance: function (e, value) {
      return (typeof (value.isOn) === 'boolean' && typeof (value.text) === 'string')
    },
    isEmail: function (e, email) {
      let reEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
      return reEmail.test(email)
    },
    isID: function (e, ID) {
      return mongoose.Types.ObjectId.isValid(ID)
    },
    notNull: function (e, value) {
      if (typeof (value) !== 'undefined' && value.length !== 0) {
        return true
      }
    },
    doctorStatus: function (e, value) {
      if (value === 'Active' || value === 'Disabled' || value === 'Draft' || value === 'Archived') {
        return true
      } else {
        return false
      }
    },
    examType: function (e, value) {
      if (value === 'Exam' || value === 'Visit') {
        return true
      } else {
        return false
      }
    }
  }
}
