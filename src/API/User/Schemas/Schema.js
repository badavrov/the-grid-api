// "use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userModel = {
  name: { type: String,unique:true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userCreated: { type: String },
  userModified: { type: String },
  age: { type: Number },
  country: { type: String},
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'game' }],
  platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'platform' }], 
  deleted: { type: Boolean, required: true, default: false }
}

mongoose.model('user', new Schema(userModel))
var userSchema = mongoose.model('user')

console.log('-----UserSchema loaded')
module.exports = userSchema
