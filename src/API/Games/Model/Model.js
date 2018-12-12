'use strict'

var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')

class GameModel {
  constructor () {
    this.GameSchema = mongoose.model('game')
  }

  register (data, res) {
    let that = this
    var game = new that.GameSchema()

  return new Promise(function (resolve, reject) {
     game.name = data.name
     game.summary = data.summary
     game.keywords = data.keywords
     game.category = data.category
     game.platform = data.platform
     game.ratingCount = data.ratingCount
     game.gameCreated = moment().format('YYYY-MM-DD HH:mm:ss')

     game.save(function (error, result) {
       if (error) {
         return reject(Boom.badRequest(error).errmsg)
       }
       return resolve(result)
    })
  })
}

updateGame(data, res) {
  let that = this

  return new Promise(function (resolve, reject) {
    that.GameSchema.findById({ _id: data.id }, function (err, game) {
      let dataKeys = Object.keys(data);
      for (let i = 0; i < dataKeys.length; i++) {
        let prop = dataKeys[i]
        let val = data[prop]

        if (prop !== 'id') {
          if (typeof game[prop] !== 'undefined') {
            game[prop] = val
          }
        }
      }
      game.gameModified = moment().format('YYYY-MM-DD HH:mm:ss');
 
      game.save(function (error, result) {
        if (error) {
          return reject(Boom.badRequest('There was a problem with updating the game'))
        }
        return resolve(result)
      })
    })
  })
}


  listGames () {
    let that = this
    let tempArr = []

    return new Promise(function (resolve, reject) {
      that.GameSchema.find({}, function (err, games) {
        if (err) return reject(Boom.badRequest(err))

        for (let i = 0; i < games.length; i++) {
          if (games[i].deleted === false) {
            tempArr.push(games[i])
          }
        }
        resolve(tempArr)
      })
        .catch(function (error) {
          return reject(Boom.badRequest(error))
        })
    })
  }

   deleteGame ( id, res) {
    let that = this

    return new Promise(function (resolve, reject) {
      that.GameSchema.findOne({ _id: id }, function (err, game) {
        if (err) { console.log(err) }
        game.deleted = true

        game.save(function (error, result) {
          if (error) { res.json(Boom.badRequest(error).errmsg) }
          res.json(result)
        })
      })
    })
   }
}
module.exports = GameModel
