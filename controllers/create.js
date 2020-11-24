var createModel = require('../models/create');
module.exports = {
    crudForm : function(req, res) {
        res.render('rectangle_view');
    },
    createData : function(req,res){
        const inputData= {
            width: req.body.width,
            height: req.body.height,
            color : req.body.color
        };
        createModel.createData(inputData,function(data){
            res.redirect('/');
            console.log(data.affectedRows + " record created");
        });
    }
}