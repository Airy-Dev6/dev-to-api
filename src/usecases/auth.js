
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('./../models/users')

async function signup (email, password) {
  const passwordEncripted = await bcrypt.hash(password, 10)
  return Users.create({email, password : passwordEncripted})
}

async function login (email, password) {
  const userFound  = await Users.findOne({email})

  if(!userFound) throw new Error('Invalid data')

  const ispasswordValid = await bcrypt.compare(password, userFound.password)

  if(!ispasswordValid) throw new Error('invalid data')

  const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET)

  return token
}

module.exports = {
  signup,
  login
}