const { writeToFile, getAllTasks } = require("../utlis");

function updateTask(id, description) {
  getAllTasks((data) => {
    const tasks = data.tasks.filter(task => {
      if (task.id == id) {
        task.description = description;
      }
      return task;
    });

    if (tasks == data.tasks) {
      console.log('\x1b[31m%s\x1b[0m', 'Task do not exist');
      return;
    }

    data.tasks = tasks;

    writeToFile(data);
    console.log('Task updated successfully');
  });
}

module.exports = {updateTask};
