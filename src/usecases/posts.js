const Posts = require('./../models/posts')

function getAllPosts () {
  return Posts.find({})
}

function createPost(title, tags, pic, contentPost) {
  return Posts.create({title, tags, pic, contentPost})
}

module.exports = {
  getAllPosts,
  createPost
}