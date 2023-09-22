// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

const index = require('./routes/index');

// Define the hostname and port number
const hostname = '127.0.0.1';
const PORT = 1245;

app.use('', index);

// Start the Express server and listen on the specified hostname and port
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

// Export the Express application to be used in other modules
module.exports = app;
