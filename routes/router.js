const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); //mongo connection
const user = require('../models/user')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
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
      if (doc.password === password) {
        res.status(200).json({"code":200,"msg":"登陆成功！"})
      }else{
        res.status(200).json({"code":500,"msg":"账号或密码错误！"})
      }
    }
  });
});

module.exports = router;
