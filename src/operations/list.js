const { getAllTasks } = require("../utlis");

function listTasks(status) {
  getAllTasks((data) => {
    let tasks = data.tasks;

    if (status !== 'all') {
      tasks = tasks.filter(task => task.status === status);
    }

    if (tasks.length === 0) {
      console.log("\nNo tasks found with status:", status);
    } else {
      console.log(
        "\nFound",
        tasks.length,
        status !== 'all' ?
          "tasks with status:"
          : "tasks",
        status !== 'all' ?
          status
          : "",
        "\n"
      );

      if (status !== 'all') {
        tasks.forEach(task => {
        console.log(`
          id: ${task.id}
          description: ${task.description}
          `);
        });
      } else {
        tasks.forEach(task => {
          console.log(`
            id: ${task.id}
            status: ${task.status}
            description: ${task.description}
          `);
        });
      }
    }

    console.log("\n");
  });
}

module.exports = { listTasks };
