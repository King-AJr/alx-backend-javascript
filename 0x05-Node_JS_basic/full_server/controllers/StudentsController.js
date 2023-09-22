// Import the readDatabase utility function from a relative path
const readDatabase = require('../utils');

// Define a class called StudentsController
class StudentsController {
  // Define a static method to get all students
  static async getAllStudents(req, res) {
    let output = ''; // Initialize an empty output string

    try {
      // Check if a file path is provided via command line arguments, default to empty string if not
      const path = process.argv.length > 2 ? process.argv[2] : '';

      // Call the readDatabase function to read student data asynchronously
      const studentsNames = await readDatabase(path);

      // Create an output string with information about the students
      output = `This is the list of our students
Number of students in CS: ${studentsNames.CS.length}. List: ${studentsNames.CS.join(', ')}
Number of students in SWE: ${studentsNames.SWE.length}. List: ${studentsNames.SWE.join(', ')}`;

      // Send a 200 (OK) response with the output string to the client
      res.status(200).send(output);
    } catch (error) {
      console.log(error); // Log any errors to the console
      output = 'Cannot load the database'; // Set an error message
      // Send a 500 (Internal Server Error) response with the error message
      res.status(500).send(output);
    }
  }

  // Define a static method to get all students by major
  static async getAllStudentsByMajor(req, res) {
    let result = []; // Initialize an empty result array

    try {
      // Check if a file path is provided via command line arguments, default to empty string if not
      const path = process.argv.length > 2 ? process.argv[2] : '';

      // Call the readDatabase function to read student data asynchronously
      const studentsNames = await readDatabase(path);

      // Extract the 'major' parameter from the request
      const { major } = req.params;

      // Check if the 'major' parameter is 'CS' or 'SWE'
      if (major === 'CS' || major === 'SWE') {
        // Sort the students' names alphabetically
        result = studentsNames[major].sort((a, b) => a.localeCompare(b));

        // Create an output string with the sorted list of students
        const output = `List: ${result.join(', ')}`;

        // Send a 200 (OK) response with the output string to the client
        res.status(200).send(output);
      } else {
        // Send a 500 (Internal Server Error) response with an error message
        res.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (err) {
      result = 'Cannot load the database'; // Set an error message
      res.send(result); // Send a response with the error message
    }
  }
}

// Export the StudentsController class to make it available for use in other modules
module.exports = StudentsController;
