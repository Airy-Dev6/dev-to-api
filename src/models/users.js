const mongoose = require('mongoose')

const schema = mongoose.Schema({
  email: {
    type:String,
    minlength: 2,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    maxlength:40,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', schema)