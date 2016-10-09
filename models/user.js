const mongoose = require('mongoose')
const userSchema = require('../schemas/user')

const user = mongoose.model("user", userSchema)

// var usern = new user({
//   username:'jack',
//   password:'1234'
// })
// usern.save((err=>console.log(err)))
module.exports = user
