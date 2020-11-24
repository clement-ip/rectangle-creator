var readModel = require('../models/read');

module.exports={
    readData:function(req,res){
        readModel.readData(function(data){
        res.render('rectangle_view',{
          data : data
        }); 
    });
  }
}