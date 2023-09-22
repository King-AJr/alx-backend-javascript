// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

// Define the hostname and port number
const hostname = '127.0.0.1';
const PORT = 1245;
// Import the 'fs' module for file system operations
const fs = require('fs');

// Function to check the field of each student and categorize them into 'CS' and 'SWE' arrays
function checkField(lines) {
  let i;
  const CS = []; // Array to store students with 'CS' field
  const SWE = []; // Array to store students with 'SWE' field
  for (i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      // Split each line into an array using ',' as the delimiter
      const line = lines[i].split(',');
      // Get the last element of the line, which represents the field
      const field = line[line.length - 1];
      if (field === 'CS') {
        // If the field is 'CS', add the first element (student) to the 'CS' array
        CS.push(line[0]);
      }
      if (field === 'SWE') {
        // If the field is 'SWE', add the first element (student) to the 'SWE' array
        SWE.push(line[0]);
      }
    }
  }
  return [CS, SWE]; // Return an array containing both 'CS' and 'SWE' student arrays
}

// Function to count and display the number of students in different fields from a given file path
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n'); // Split the file content into an array of lines
        const nonEmptyLines = lines.filter((line) => line.trim() !== ''); // Filter out empty lines

        if (nonEmptyLines.length === 0) {
          console.log('No student data found in the file.');
          return;
        }

        // Get the total number of non-empty lines (excluding headers)
        const numberOfLines = nonEmptyLines.length;

        // Categorize non-empty lines into 'CS' and 'SWE' arrays
        const students = checkField(nonEmptyLines);
        const CSStudentList = students[0].join(', '); // Convert the 'CS' student array to a comma-separated string
        const SWEStudentList = students[1].join(', '); // Convert the 'SWE' student array to a comma-separated string
        const output = `Number of students: ${numberOfLines - 1}
Number of students in CS: ${students[0].length}. List: ${CSStudentList}
Number of students in SWE: ${students[1].length}. List: ${SWEStudentList} `;

        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      const returnString = output.slice(0, -1);
      res.send(`This is the list of our students\n${returnString}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen on the specified hostname and port
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

module.exports = app;
