const mongoose = require('mongoose')

const Schema = new mongoose.Schema( {

  title: {
    type: String,
    minlength: 2 , 
    maxlength: 20,
    trim: true, 
    required: true
  },

  tags: {
    type: String,
    minlength: 2,
    maxlength: 25,
    trim: true, 
    required: true
  },

  pic: {
    type: String,
    required: true, 
    trim: true
  },

  contentPost: {
    type: String,
    minlength: 15 ,
    maxlength: 2000,
    trim: true, 
    required: true
  }

})

module.exports = mongoose.model('posts', Schema)