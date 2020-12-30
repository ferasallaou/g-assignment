const express = require('express');
const router = express.Router();
const RecordsController = require('./RecordsController');

router.post('/', RecordsController.getRecords);

module.exports = router;
