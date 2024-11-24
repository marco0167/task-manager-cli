const fs = require('fs');

const { findDescription, getAllTasks, wrongFormatMessage } = require('../utlis');

function addTask(answer) {
  const description = findDescription(answer);
  if (!description) {
    wrongFormatMessage('add "<description>"');
    return;
  }

  // Get all tasks and add a new task to the list
  getAllTasks((data) => {
    const newIndex = data.lastIndex + 1;
    const newTask = {
      id: newIndex,
      description: description,
      status: 'todo',
      createdAt: '',
      updatedAt: ''
    }

    data.tasks.push(newTask)
    data.lastIndex = newIndex;

    // convert JSON object to a string
    const newData = JSON.stringify(data)

    // write JSON string to a file
    fs.writeFile(taskFilePath, newData, err => {
      if (err) {
        throw err
      }
      console.log('JSON data is saved.\n')
    })
  });
}

module.exports = {addTask};
