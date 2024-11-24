const fs = require('fs');

const { findDescription, getAllTasks, wrongFormatMessage, writeToFile } = require('../utlis');

function addTask(description) {
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
    writeToFile(data);
  });
}

module.exports = {addTask};
