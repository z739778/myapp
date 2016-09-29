var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  user: {
    username: String,
    password: String
  }
})
mongoose.model('user', userSchema);
