const express = require('express');
const router = express.Router();

const createExperience = require('../controller/CreateExp');
const deleteExperience = require('../controller/DeleteExp');
const getExperience = require('../controller/GetExp');
const updateExperience = require('../controller/UpdateExp');


router.post('/create', createExperience);   
router.delete('/delete', deleteExperience);
router.get('/get', getExperience);
router.put('/update', updateExperience);

module.exports = router;