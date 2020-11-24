var express = require('express');
var deleteController = require('../controllers/delete');
var router = express.Router();

// to delete data 
router.post('/', deleteController.deleteData);

module.exports = router;