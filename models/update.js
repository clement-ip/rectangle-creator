var db = require('../server');

module.exports={
    editData : function(editId, callback){
        var sql=`SELECT * FROM rectangles WHERE id=${editId}`;
        db.query(sql, function (err, data) {
            if (err) throw err;
            return callback(data[0]);
        });
    },

    updateData : function(inputData, updateId, callback){
        var sql = `UPDATE rectangles SET ? WHERE id= ?`;
        db.query(sql, [inputData, updateId], function (err, data) {
            if (err) throw err;
            return callback(data);
    });
  }
}