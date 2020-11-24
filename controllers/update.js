var updateModel = require('../models/update');

module.exports={

    editData : function(req, res){
        const editId = req.params.id;
        updateModel.editData(editId, function(data){
            res.render('rectangle_view', { 
                editData : data 
            });
            console.log(data.affectedRows + " record fetched");
        });
    },

    updateData : function(req,res){
        const inputData= { 
            width: req.body.width, 
            height: req.body.height, 
            color : req.body.color
        }; 
        const updateId = req.body.id;
        updateModel.updateData(inputData,updateId,function(data){
            res.redirect('/');
            console.log(data.affectedRows + " record(s) updated");

        }); 
    }
}