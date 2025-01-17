const express = require('express');
const dotenv = require('dotenv');
const app = require('./app'); // Import app.js

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
