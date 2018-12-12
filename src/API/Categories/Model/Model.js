'use strict'

var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')

class CatModel {
  constructor () {
    this.CatSchema = mongoose.model('category')
  }

  createCat (data, res) {
    let that = this
    var cat = new that.CatSchema()

  return new Promise(function (resolve, reject) {
     cat.name = data.name
     cat.catCreated = moment().format('YYYY-MM-DD HH:mm:ss')

     cat.save(function (error, result) {
       if (error) {
         return reject(Boom.badRequest(error).errmsg)
       }
       return resolve(result)
    })
  })
}

  listCat () {
    let that = this
    let tempArr = []

    return new Promise(function (resolve, reject) {
      that.CatSchema.find({}, function (err, cats) {
        if (err) return reject(Boom.badRequest(err))

        for (let i = 0; i < cats.length; i++) {
          if (cats[i].deleted === false) {
            tempArr.push(cats[i])
          }
        }
        resolve(tempArr)
      })
        .catch(function (error) {
          return reject(Boom.badRequest(error))
        })
    })
  }

  updateCat(data, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.CatSchema.findById({ _id: data.id }, function (err, cat) {
        let dataKeys = Object.keys(data);
        for (let i = 0; i < dataKeys.length; i++) {
          let prop = dataKeys[i]
          let val = data[prop]

          if (prop !== 'id') {
            if (typeof cat[prop] !== 'undefined') {
              cat[prop] = val
            }
          }
        }
        cat.catModified = moment().format('YYYY-MM-DD HH:mm:ss');
   
        cat.save(function (error, result) {
          if (error) {
            return reject(Boom.badRequest('There was a problem with updating the Category'))
          }
          return resolve(result)
        })
      })
    })
  }

   deleteCat (id, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.CatSchema.findOne({ _id: id }, function (err, cat) {
        if (err) { console.log(err) }
        cat.deleted=true

        cat.save(function (error, result) {
          if (error) { res.json(Boom.badRequest(error).errmsg) }
          res.json(result)
        })
      })
    })
   }
}
module.exports = CatModel
