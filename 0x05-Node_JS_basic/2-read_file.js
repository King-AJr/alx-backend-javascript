// Import the 'fs' module for file system operations
const fs = require('fs');

// Function to check the field of each student and categorize them into 'CS' and 'SWE' arrays
function checkField(lines) {
  let i;
  const CS = []; // Array to store students with 'CS' field
  const SWE = []; // Array to store students with 'SWE' field
  for (i = 0; i < lines.length; i += 1) {
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
  return [CS, SWE]; // Return an array containing both 'CS' and 'SWE' student arrays
}

// Function to count and display the number of students in different fields from a given file path
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8'); // Read the file synchronously
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
    console.log(`Number of students: ${numberOfLines - 1}`); // Display the total number of students (excluding headers)
    console.log(`Number of students in CS: ${students[0].length}. List: ${CSStudentList}`); // Display 'CS' student count and list
    console.log(`Number of students in SWE: ${students[1].length}. List: ${SWEStudentList}`); // Display 'SWE' student count and list
  } catch (err) {
    throw Error('Cannot load the database:'); // Handle errors if the file cannot be read
  }
}

// Export the 'countStudents' function for use in other modules
module.exports = countStudents;
