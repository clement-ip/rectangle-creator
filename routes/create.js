var express = require('express');
var createController = require('../controllers/create');
var router = express.Router();

// to display form
router.get('/', createController.crudForm );

// to create data
router.post('/', createController.createData);

module.exports = router;