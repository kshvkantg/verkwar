const express = require('express');
const router = express.Router();

const createService = require('../controller/CreateService');   
const deleteService = require('../controller/DeleteService');
const getService = require('../controller/GetService');
const updateService = require('../controller/UpdateService');

router.post('/create', createService);
router.delete('/delete', deleteService);
router.get('/get', getService);
router.put('/update', updateService);

module.exports = router;