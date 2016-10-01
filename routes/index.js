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
  console.log(username)
  user.fetch(function(err, user) {
    console.log('xxx')
    if (err) {
      console.log(err)
    }
    console.log(user)
  })
  user.findByUserName({ username: username }, function(err, doc) {
    console.log('dd')
    if (err) {
      console.log(err)
    } else {
      console.log('dd')
    }
  });
});

router.post('/register', function(req, res) {
  console.log('register post...');
  var postData = req.body;
  mongoose.model('myapp').findOne({ username: postData.username }, function(err, doc) {
    if (err) {
      res.sendStatus(500);
    } else if (doc) {
      res.status(500).send('用户名已经存在');
    } else {
      User.create(postData, function(err, doc) {
        if (err) {
          console.log('保存数据失败...');
          res.sendStatus(500);
        } else {
          console.log('保存数据成功！');
          res.sendStatus(200);
        }
      });
    }
  });
});
module.exports = router;
