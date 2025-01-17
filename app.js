const express = require('express');
const app = express();
const routes = require('./routes'); // Import routes

app.use(express.json()); // Middleware for parsing JSON
app.use('/api', routes); // Mount routes

module.exports = app;

const errorHandler = require('./middlewares/errorHandler');

app.use(errorHandler); // Catch-all error handler
