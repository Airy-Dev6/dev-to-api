
const express = require('express')
const posts = require('./../usecases/posts')

const router = express.Router()

router.get('/', async (request, response) => {
  const allPost = await posts.getAllPosts()

  response.json({
    success: true,
    data: allPost
  })
})

router.post('/', async (request, response) => {
  const {title, tags, pic, contentPost} = request.body
  const postCreate = await posts.createPost(title, tags, pic, contentPost)

  response.json({
    success: true,
    data: postCreate
  })
})

module.exports = router