const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String
})

// userSchema.pre('save', (next) => {
//   if (this.isNew) {
//     console.log(this)
//   }

//   next()
// })

userSchema.statics = {
  fetch(cb) {
    return this
      .find({})
      exec(cb)
  },
  findByUserName(id, cb) {
    return this
      .findOne({ username: id })
      exec(cb)
  }
}

module.exports = userSchema
