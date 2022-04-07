'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  interests: { type: String },
});

module.exports = mongoose.model('User', userSchema);
