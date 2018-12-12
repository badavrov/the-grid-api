/* jslint node: true */
'use strict'

var mongoose = require('mongoose')
var assert = require('assert')

var uri = 'mongodb://127.0.0.1:27017/game-tracker-api'
var options = { promiseLibrary: require('bluebird') }
var db = mongoose.createConnection(uri, options)
var Band = db.model('band-promises', { name: String })


db.on('open', function () {
  assert.equal(Band.collection.findOne().constructor, require('bluebird'))
})

mongoose.Promise=global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/game-tracker-api', { useMongoClient: true })
console.log('Database loaded')
