// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;

// Conenct to mongo db process
mongoose.connect('mongodb://localhost:27017/CustomerDatabase')
	.then(function () { console.log("MongoDB connected successfully") })
	.catch(function (err) {
		console.error("MongoDB connection error", err.message);
		process.exit(1);
	})
// Define the schema
const customersSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: String,
	leads: String
})
// Create a model
const customersCollection = mongoose.model('customers', customersSchema)


// Enable CORS
app.use(cors());
app.use(express.json())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Add addCustomer function and route
async function addCustomer(req, res) {
	const { name, email, address, leads } = req.body
	const newDoc = new customersCollection({ name: name, email: email, address: address, leads: leads })

	try {
		const savedDoc = await newDoc.save()
		console.log("Added: " + savedDoc.name + savedDoc.email + savedDoc.address + savedDoc.leads)
		res.status(200).json({ name, email, address, leads });
	} catch (err) {
		console.error(err)
		res.status(500).send()
	}
}
app.post('/addCustomer', addCustomer);

async function getCustomers(req, res) {
	try {
		const customers = await customersCollection.find();
		res.status(200).json(customers);
	} catch (err) {
		console.error(err);
		res.status(500).send();
	}
}
app.get('/getCustomers', getCustomers);

async function removeCustomer(req, res) {
	try {
		const { name, email, address, leads } = req.body;
		const customer = await customersCollection.findOneAndDelete({ name, email, address, leads })
		if (customer) {
			console.log("Removed: " + name + email + address + leads)
			res.status(200).send();
		} else {
			res.status(404).send()
		}
	}
	catch (err) {
		console.error(err);
		res.status(500).send();
	}
}
app.delete('/removeCustomer', removeCustomer);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
