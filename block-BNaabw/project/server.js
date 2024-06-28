const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(express.json());
// Middleware for logging
app.use(morgan('dev'));
// Middleware for parsing cookies
app.use(cookieParser());
// Middleware for serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'projects.html'));
});

// Sample routes
app.get('/users', (req, res) => {
  res.send('Users page');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// 500 error handler
app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err.message}`);
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port 4k`);
});
