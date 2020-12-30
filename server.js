require('dotenv').config();
const express = require('express');
const app = express();

const Records = require('./Services/Records');

const bodyParser = require('body-parser');

// Config Middlewares
app.use(bodyParser.json());

// Routes - in case of having a lot of services it is a good practice to move those lines into a separete File
app.use('/records', Records);

module.exports = app;
