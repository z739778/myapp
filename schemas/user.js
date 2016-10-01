const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  year: String
})

userSchema.pre('save', (next) => {
  if (this.isNew) {
    this.year = new Date().getFullYear()
  } 
  next()
})

userSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
    exec(cb)
  },
  findByUserName: function(id, cb) {
    return this
      .findOne({ username: id })
    exec(cb)
  }
}

module.exports = userSchema
