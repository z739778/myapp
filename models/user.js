const mongoose = require('mongoose')
const userSchema = require('../schemas/users')

const user = mongoose.model("user", userSchema)
module.exports = user
