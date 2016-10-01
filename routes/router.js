var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var user = require('../models/user')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  user.fetch(function(err, user) {
    if (err) {
      console.log(err)
    }
    console.log(user)
  })
  user.findByUserName(username, function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(doc)
    }
  });
});

module.exports = router;
