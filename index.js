const mongoose = require('mongoose');
const server = require('./server');
const PORT = process.env.PORT || 4000;

mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Up & Running on ${PORT} 🚀`);
		});
	})
	.catch((err) => {
		throw new Error(err);
	});
