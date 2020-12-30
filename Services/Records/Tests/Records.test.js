const request = require('supertest');
const mongoose = require('mongoose');
const faker = require('faker');

const bodyObject = {
	startDate: faker.date.past(5),
	endDate: faker.date.past(1),
	minCount: faker.random.number(100),
	maxCount: faker.random.number(100000),
};

describe('POST /records', () => {
	beforeEach(async () => {
		server = require('../../../server');
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	});
	it('should return an object with code, message & records', async (done) => {
		const response = await request(server).post('/records').send(bodyObject);
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('code');
		expect(response.body).toHaveProperty('message');
		expect(response.body).toHaveProperty('records');
		done();
	}, 50000);
});
