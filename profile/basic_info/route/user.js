const express = require('express');
const router = express.Router();

const createUser = require('../controller/CreateUser');
const deleteUser = require('../controller/DeleteUser');
const getUser = require('../controller/GetUser');

router.post('/create', createUser);
router.get('/delete', deleteUser);
router.get('/get', getUser);

module.exports = router;