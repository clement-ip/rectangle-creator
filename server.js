const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'password',  
    database: 'cmpt470'
}); 

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
  });
module.exports = dbConnection;

// dbConnection.connect((err)=>{
//     if(!err){
//         console.log("Connected!");
//     }
//     else{
//         throw err;
//     }
// })

// var port = 3000;
// app.listen( port, function() {
//     console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
// });

