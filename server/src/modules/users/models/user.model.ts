import mongoose = require('mongoose')
import bcrypt = require('bcryptjs')

import mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const users = new Schema({
  email: {
    dropDups: true,
    required: true,
    type: String,
    unique: true,
  },
  name: String,
  password: {
    required: true,
    type: String,
  },
})

users.plugin(mongoosePaginate)
export default mongoose.model('users', users)
