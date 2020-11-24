//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use favicon module
const favicon = require('serve-favicon');
//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();

var createRouter = require('./routes/create');
var readRouter = require('./routes/read');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use('/', readRouter);
app.use('/save', createRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

//server listening
var port = 3000
app.listen(port, () => {
  console.log('Server is running at port %d', port);
});

// //route for homepage
// app.get('/',(req, res) => {
//   let sql = "SELECT * FROM product";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.render('product_view',{
//       results: results
//     });
//   });
// });

// //route for insert data
// app.post('/save',(req, res) => {
//   let data = {product_name: req.body.product_name, product_price: req.body.product_price};
//   let sql = "INSERT INTO product SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// //route for update data
// app.post('/update',(req, res) => {
//   let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// //route for delete data
// app.post('/delete',(req, res) => {
//   let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//       res.redirect('/');
//   });
// });
