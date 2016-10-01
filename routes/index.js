var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var userSchema = require('../models/user')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
 
router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username)
  userSchema.findByUserName({ username: username }, function(err, doc) {
    console.log('dd')
    if (!doc) {
      res.status(200).json({"code":200,"msg":"用户名不存在"});
      console.log('用户名不存在');
    } else {
      if (doc.password !== password) {
        res.status(200).json({"code":200,"msg":"密码错误"});
        console.log('密码错误');
      } else {
        req.session.user = doc;
        res.status(200).send('登陆成功');
        console.log(req.session);
        console.log('登陆成功！');
      }
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
