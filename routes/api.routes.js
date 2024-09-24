var express = require('express');
var router = express.Router();

let api = require('../controllers/api.controller');

router.get('/employees',api.getAllEmployee);

router.post('/employees',api.createEmployee);

router.put('/employees/:Id',api.updateEmployee);

router.delete('/employees/:Id',api.deleteEmployee);

module.exports = router;