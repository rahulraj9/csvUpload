/* This code defines a function called uploadCsv that handles the uploading and processing of a CSV file. 
It reads the file using the fs module and the csv-parser library, and then saves the data to a database using a 
model called Csv.
*/

const fs = require('fs');
const csv = require('csv-parser');
const Csv = require('../model/csv.model');

const uploadCsv = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const results = [];
  const filePath = req.file.path;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('headers', (headers) => {
      // Store the headers as an array
      results.push(headers);
    })
    .on('data', (data) => {
      // Process each row of data and save it as an object
      results.push(data);
    })
    .on('end', async () => {
      // Clean up - remove the temporary file
      fs.unlinkSync(filePath);

      // Combine headers and data into a JSON object
      const jsonData = {
        headers: results[0], // First element is the headers
        data: results.slice(1), // Rest of the elements are data rows
      };

      try {
        // Save CSV data to the database
        await Csv.create({ data: jsonData });
        res.status(200).json({ message: 'File uploaded and saved to the database' });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    });
};

module.exports = {
  uploadCsv,
};
