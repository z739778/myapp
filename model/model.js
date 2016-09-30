var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  username: String,
  password: String
})
mongoose.model('myapp', userSchema);
