// Import the 'http' module
const http = require('http');

// Define the hostname and port for your server
const hostname = '127.0.0.1'; // Change this to your desired hostname or IP
const port = 1245; // Change this to your desired port number

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.statusCode = 200; // HTTP status code 200 means "OK"
  res.setHeader('Content-Type', 'text/plain');

  // Write a response to the client
  res.end('Hello Holberton School!\n');
});

// Start the server and listen on the specified hostname and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
