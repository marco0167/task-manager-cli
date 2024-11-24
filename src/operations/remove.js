const { getAllTasks, writeToFile } = require("../utlis");

function removeTask(id) {
  getAllTasks((data) => {
    let idExist = false;
    data.tasks = data.tasks.filter(task => {
      if (task.id != id) {
        return task;
      }
      idExist = true;
    });

    if (!idExist) {
      console.log('\x1b[31m%s\x1b[0m', 'Task do not exist');
      return;
    }

    writeToFile(data);
  });
}

module.exports = { removeTask };
