var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/myapp');

//链接数据库提示
db.connection.on("error", function(error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function() {
  console.log("------数据库连接成功！------");
});
