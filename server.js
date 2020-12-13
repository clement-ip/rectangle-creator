const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'password',  
    database: 'rectangle_creator'
}); 

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
  });
module.exports = dbConnection;


