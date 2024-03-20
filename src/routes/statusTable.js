const express = require('express');
const router = express.Router();

const TableController = require('../app/controllers/tableControllers')

router.get('/', TableController.index);
module.exports = router
