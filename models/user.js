const mongoose = require('mongoose')
const userSchema = require('../schemas/user')

const user = mongoose.model("user", userSchema)

var users = new user({
  username: "jack",
  password: "123",
})
users.save(function(err) {
  if (err) { console.log(err) }
})
module.exports = user
