const { writeToFile, getAllTasks } = require("../utlis");

function updateTask(id, type, newVal) {
  getAllTasks((data) => {
    let idExist = false;
    data.tasks.filter(task => {
      if (task.id == id) {
        task[type] = newVal;
        idExist = true;
      }
    });

    if (!idExist) {
      console.log('\x1b[31m%s\x1b[0m', 'Task do not exist');
      return;
    }
    
    writeToFile(data);
    console.log('Task updated successfully');
  });
}

module.exports = {updateTask};
