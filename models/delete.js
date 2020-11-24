var db = require('../server');

module.exports={
  deleteData : function(deleteId, callback){
    var sql = 'DELETE FROM rectangles WHERE id = ?';
    db.query(sql, [deleteId], function (err, data) {
        if (err) throw err;
        return callback(data);
    });
  }
}