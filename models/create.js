var db = require('../server');

module.exports={ 
  createData : function(inputData,callback){
    var sql = 'INSERT INTO rectangles SET ?'; 
    db.query(sql, inputData,function (err, data) {
        if (err) throw err;
        return callback(data);
    });
  }
}