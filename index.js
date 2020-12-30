require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const Records = require('./Services/Records');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Config Middlewares
app.use(bodyParser.json());

// Route Middlewares - in case of having a lot of services it is a good practice to move those lines into a separete File
app.use('/records', Records);

app.listen(PORT, async () => {
	await mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(`Up & Running on ${PORT} 🚀`);
});
