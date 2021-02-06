// se exporta el servidor 
require('dotenv').config()
const db = require('./src/lib/db')

const server = require ('./src/server')

/* server.listen('8080', () => {
  console.log('Server is Listening')
}) */

db.connect
  .then(()  => {
    server.listen('8080', () => {
      console.log('Server is listening')
    }) 
  })