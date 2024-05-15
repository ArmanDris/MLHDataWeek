const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: {type: String, required: true }
});

const usersCollection = new mongoose.model('users', usersSchema)

module.exports = usersCollection