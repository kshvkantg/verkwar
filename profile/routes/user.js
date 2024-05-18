const express = require('express');
const router = express.Router();

const createUser = require('../controller/createUser');
const deleteUser = require('../controller/deleteUser');
const getUser = require('../controller/getUser');

router.post('/create', createUser);
router.get('/delete', deleteUser);
router.get('/get', getUser);

module.exports = router;