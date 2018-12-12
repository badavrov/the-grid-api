'use strict'

var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')

class PlatformModel {
  constructor() {
    this.PlatformSchema = mongoose.model('platform')
  }

  createPlatform(data, res) {
    let that = this
    var plat = new that.PlatformSchema()

    return new Promise(function (resolve, reject) {
      plat.name = data.name
      plat.icon = data.icon
      plat.platformCreated = moment().format('YYYY-MM-DD HH:mm:ss')

      plat.save(function (error, result) {
        if (error) {
          return reject(Boom.badRequest(error).errmsg)
        }
        return resolve(result)
      })
    })
  }

  listPlat() {
    let that = this
    let tempArr = []

    return new Promise(function (resolve, reject) {
      that.PlatformSchema.find({}, function (err, plats) {
        if (err) return reject(Boom.badRequest(err))

        for (let i = 0; i < plats.length; i++) {
          if (plats[i].deleted === false) {
            tempArr.push(plats[i])
          }
        }
        resolve(tempArr)
      })
        .catch(function (error) {
          return reject(Boom.badRequest(error))
        })
    })
  }

  updatePlat(data, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.PlatformSchema.findById({ _id: data.id }, function (err, plat) {
        let dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
          let prop = dataKeys[i]
          let val = data[prop]

          if (prop !== 'id') {
            if (typeof plat[prop] !== 'undefined') {
              plat[prop] = val
            }
          }
        }
        plat.platformModified = moment().format('YYYY-MM-DD HH:mm:ss');
   
        plat.save(function (error, result) {
          if (error) {
            return reject(Boom.badRequest('There was a problem with updating the platform'))
          }
          return resolve(result)
        })
      })
    })

  }

  deletePlat(id, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.PlatformSchema.findOne({ _id: id }, function (err, plat) {
        if (err) { console.log(err) }
        plat.deleted = true

        plat.save(function (error, result) {
          if (error) { res.json(Boom.badRequest(error).errmsg) }
          res.json(result)
        })
      })
    })
  }
}
module.exports = PlatformModel
