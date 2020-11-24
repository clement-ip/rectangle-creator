var deleteModel = require('../models/delete');

module.exports={
    deleteData : function(req,res){
        const deleteId = req.body.id;
        deleteModel.deleteData(deleteId,function(data){
            res.redirect('/');
            console.log(data.affectedRows + " record deleted");
        });
    }
}