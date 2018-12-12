// "use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var categoryModel = {
  name: { type: String, required: true },
  catCreated: { type: String },
  catModified: { type: String },
  icon: { type: String },
  deleted: { type: Boolean, required: true, default: false }
}

mongoose.model('category', new Schema(categoryModel))
var categorySchema = mongoose.model('category')

module.exports = categorySchema
