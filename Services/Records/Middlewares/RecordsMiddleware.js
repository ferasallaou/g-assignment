const { fetchRequestSchema } = require('../Validations/RecordsSchema');

const fetchMiddleware = async (request, response, next) => {
	// Pagination
	let { page } = request.query;
	if (!page || page <= 0) page = 1;
	const limit = 10;
	const offset = (page - 1) * limit;
	request.pagination = { page, limit, offset };

	// Clean Body Object & Make sure it contains all the keys we want
	const { error, value } = fetchRequestSchema.validate(request.body);
	if (error) return next(error.details[0].message);

	request.body = value;
	next();
};

module.exports = { fetchMiddleware };
