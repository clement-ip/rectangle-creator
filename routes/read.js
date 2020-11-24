var express = require('express');
var readController = require('../controllers/read');
var router = express.Router();

// to display data 
router.get('/', readController.readData);

module.exports = router;