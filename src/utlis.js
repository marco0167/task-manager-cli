const fs = require('fs');
const path = require("path");

const taskFilePath = path.join(path.basename(__dirname), 'tasks.json');

function findDescription(text) {
  // This regex enforces:
    // 1. Must start with "add "
    // 2. Must have opening "<" after the word "add "
    // 3. Must have a description between " and "
    // 4. Must not have any other text after the closing quote
    // 5. Can have optional spaces after the closing quote, but nothing else
  const regex = /^add "([^"]+)"\s*$/;

  const match = text.match(regex);
  const description = match ? match[1] : null;

  return description;
}

function getAllTasks(callback) {
  fs.readFile(taskFilePath, 'utf-8', (err, data) => {
    const emptyData = {
      lastIndex: 0,
      tasks: []
    };

    if (err) {
      if (err.code === 'ENOENT') {
        // File does not exist, return an empty array
        console.log("File not found, returning empty array\n");
        return callback(emptyData);
      } else {
        throw err;
      }
    }

    try {
      const fileData = data ? JSON.parse(data) : [];
      return callback(fileData);
    } catch (parseErr) {
      console.error("Error parsing JSON data:", parseErr);
      return callback(emptyData);
    }
  });
}

function writeToFile(data) {
  fs.writeFile(
    taskFilePath,
    JSON.stringify(data),
    (err) => {
      if (err) {
        throw err
      }
      console.log('JSON data is saved.\n')
    }
  )
}

function wrongFormatMessage(correctFormat  ) {
  console.log('\x1b[31m%s\x1b[0m','\nWrong format!');
  console.log('Please use the format:', '\x1b[32m', correctFormat, '\x1b[0m\n');
}

module.exports = { findDescription, getAllTasks, wrongFormatMessage, writeToFile };
