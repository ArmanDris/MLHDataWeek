// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db')
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Enable CORS
app.use(cors());
app.use(express.json())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// API route example
app.post('/api/data', (req, res) => {
  const { name, email, address, leads } = req.body
  console.log(name + email + address + leads)
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
