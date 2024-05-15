const mongoose = require('mongoose')

const customersSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: String,
	leads: String
})

const customersCollection = mongoose.model('customers', customersSchema)

module.exports = customersCollection;