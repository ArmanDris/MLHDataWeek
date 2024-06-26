// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const sha256hash = require('./customHash')
const mongoose = require('mongoose')
const customersCollection = require('./models/customer')
const usersCollection = require('./models/user')

// Connect to mongo db process
mongoose.connect('mongodb://localhost:27017/CustomerDatabase')
	.then(function () { console.log("MongoDB connected successfully") })
	.catch(function (err) { console.error("MongoDB connection error", err.message); process.exit(1); })


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

async function login(req, res) {
	const { username, password } = req.body;
	const hashedPass = sha256hash(password);

	console.log("\n" + password + " ---hashes to--->" + hashedPass);

	const users = await usersCollection.find({ username: username });

	for (const user of users) {
		if (user.password === hashedPass) {
			console.log("Which matches " + user.username + "'s hashed password: " + user.password + "\n")
			return res.status(200).send('Login successful');
		}
	}

	return res.status(401).send('Login failed');
}
app.post('/login', login);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
