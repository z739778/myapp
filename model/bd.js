var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/enmskeleton');
db.connection.on("error", function(error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function() {
  console.log("------数据库连接成功！------");
});
