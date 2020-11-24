var db = require('../server');

module.exports={
  readData : function(callback){
      var sql='SELECT * FROM rectangles';
      db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
    });  
  }
}