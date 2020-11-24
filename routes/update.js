var express = require('express');
var updateController = require('../controllers/update');
var router = express.Router();

// to edit data 
router.get('/', updateController.editData);

// to update data 
router.post('/', updateController.updateData);

module.exports = router;