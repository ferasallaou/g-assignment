const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecordSchema = new Schema({
	key: String,
	value: String,
	counts: [Number],
});

module.exports = mongoose.model('Records', RecordSchema, 'records');
