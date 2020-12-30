const express = require('express');
const router = express.Router();
const RecordsController = require('./Controllers/RecordsController');
const { fetchMiddleware } = require('./Middlewares/RecordsMiddleware');

router.post('/', fetchMiddleware, RecordsController.getRecords);

module.exports = router;
