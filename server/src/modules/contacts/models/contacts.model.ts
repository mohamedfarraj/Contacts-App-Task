import mongoose = require('mongoose')

import mongoosePaginate = require('mongoose-paginate-v2')
const Contacts = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  phones: {
    required: true,
    type: [{
      label: String,
      number: Number,
    }],
  },
})

Contacts.plugin(mongoosePaginate)
export default mongoose.model('contacts', Contacts)
