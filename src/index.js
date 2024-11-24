const readline = require('readline');

const { addTask } = require('./operations/add');
const { listTasks } = require('./operations/list');
const { updateTask } = require('./operations/update');

function help() {
  console.log(`
  These are the available operations:\n
  - add "<description>"
  - delete <id>
  - update <id> "<description>"

  - mark-in-progress <id>
  - mark-done <id>

  - list
  - list done
  - list todo
  - list in-progress
  `)
}

function parseTaskCommand(input) {
  // Define regex patterns for each command type
  const patterns = {
      // Match add command: add "task description"
      add: /^add "([^"]+)"$/,

      // Match update command: update ID "new description"
      update: /^update (\d+) "([^"]+)"$/,

      // Match delete command: delete ID
      delete: /^delete (\d+)$/,

      // Match status change commands: mark-in-progress ID or mark-done ID
      markInProgress: /^mark-in-progress (\d+)$/,
      markDone: /^mark-done (\d+)$/,

      // Match list commands: list [status]
      list: /^list( (done|todo|in-progress))?$/,

      help: /^help$/
  };

  // Process the command and return structured info
  function processCommand(line) {
      // Skip empty lines
      if (!line.trim()) {
          return null;
      }

    let notFound = true;

      // Check each pattern
    for (const [commandType, pattern] of Object.entries(patterns)) {
      const match = line.match(pattern);
      if (match) {
        notFound = false;
        switch (commandType) {
          case 'add':
            return addTask(match[1]);

          case 'update':
            return updateTask(match[1], match[2]);

          case 'delete':
            return deleteTask(match[1]);

          case 'markInProgress':
            return updateTask(match[1], 'status', 'in-progress');

          case 'markDone':
            return updateTask(match[1], 'status', 'done');

          case 'list':
            return listTasks(match[2] || 'all');

          case 'help':
            return help();
        }
      }
    }

    if (notFound) {
      console.log('Invalid operation');
    }

    return null;
  }

  return  processCommand(input);
}

const  rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

 rl.question('Do an operation: ', function (answer) {
  parseTaskCommand(answer);
  // console.log('Answer: ' + answer);
  // console.log('interface closed');
   rl.close();
})
