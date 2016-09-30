var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/login',function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username)
  User.findOne({ username: username }, function(err, doc) {
    if (!doc) {
      res.status(404).send('用户名不存在');
      console.log('用户名不存在');
    } else {
      if (doc.password !== password) {
        res.status(404).send('密码错误');
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
router.get('/register', function(req, res) {
  console.log('register post...');
  var postData = req.body;
  User.findOne({ username: postData.username }, function(err, doc) {
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
