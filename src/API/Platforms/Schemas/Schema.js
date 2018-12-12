// "use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var platformModel = {
  name: { type: String, required: true },
  platformCreated: { type: String },
  platformModified: { type: String },
  icon: { type: String },
  deleted: { type: Boolean, required: true, default: false }
}

mongoose.model('platform', new Schema(platformModel))
var platformSchema = mongoose.model('platform')

console.log('-----Platform Schema loaded')
module.exports = platformSchema
