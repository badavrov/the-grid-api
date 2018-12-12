// "use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var gameModel = {
  name: { type: String, required: true },
  gameCreated: { type: String },
  gameModified: { type: String },
  ratingAv: { type: Number },
  ratingCount: { type: Number },
  summary: { type: String },
  keywords: [{ type: String }],
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
  platform: [{ type: mongoose.Schema.Types.ObjectId, ref: 'platform' }],
  deleted: { type: Boolean, required: true, default: false }
}

mongoose.model('game', new Schema(gameModel))
var gameSchema = mongoose.model('game')

console.log('-----GameSchema loaded')
module.exports = gameSchema
