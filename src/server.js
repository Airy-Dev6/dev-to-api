const express = require('express')
const postsRouter = require('./routes/posts')
const authRouter = require('./routes/auth')

const server = express()

server.use(express.json())

server.use('/posts', postsRouter)
server.use('/auth', authRouter)

server.get('/', (request, response)=> {
  response.json({
    success: true,
    message: 'dev.to  API v10'
  })
})

module.exports = server 