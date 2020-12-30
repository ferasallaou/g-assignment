const Records = require('../Models/Record');
const _ = require('lodash');
class RecordsController {
	static async getRecords(request, response, next) {
		const { limit, offset } = request.pagination;
		try {
			const getData = await Records.aggregate([
				{
					$addFields: {
						totalCount: { $sum: '$counts' },
					},
				},
				{
					$match: {
						createdAt: {
							$gte: request.body.startDate,
							$lte: request.body.endDate,
						},
						totalCount: {
							$gte: request.body.minCount,
							$lte: request.body.maxCount,
						},
					},
				},
				{ $limit: limit },
				{ $skip: offset },
			]);
			const data = _.map(
				getData,
				_.partialRight(_.pick, ['key', 'createdAt', 'totalCount'])
			);
			response.send({ code: 0, message: 'Success', records: data });
		} catch (error) {
			response.send({
				code: -1,
				message: `Error ${error.message}`,
				records: [],
			});
		}
	}
}

module.exports = RecordsController;
