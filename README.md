# Task Manager CLI

A command-line task management application built with Node.js that helps you organize and track your daily tasks efficiently. This lightweight CLI tool provides intuitive commands for managing tasks with different statuses and priorities.

## 🚀 Features

- **Task Management**
  - Create new tasks with detailed descriptions
  - Update existing task details
  - Delete tasks by their ID
  - Mark tasks as "in progress" or "done"

- **Task Organization**
  - View all tasks at once
  - Filter tasks by status (todo/in-progress/done)
  - Clear, formatted output for better readability

## 📋 Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## ⚡ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/marco0167/task-manager-cli.git
   cd task-manager-cli
   ```

2. Start the application:
   ```bash
   node task-cli.js
   ```

## 💻 Usage

### Starting the Application

1. Open your terminal
2. Navigate to the project directory
3. Run:
   ```bash
   node task-cli.js
   ```
4. The CLI will start in interactive mode

### Available Commands

```bash
# Adding a new task
add "Buy groceries"

# Updating task description
update 1 "Buy groceries and cook dinner"

# Deleting a task
delete 1

# Changing task status
mark-in-progress 1
mark-done 1

# Viewing tasks
list             # List all tasks
list done        # List completed tasks
list todo        # List pending tasks
list in-progress # List tasks in progress
```

### Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `add` | Create a new task | `task-cli add "Complete project documentation"` |
| `update` | Modify task description | `task-cli update 1 "Update project docs"` |
| `delete` | Remove a task | `task-cli delete 1` |
| `mark-in-progress` | Set task status to in progress | `task-cli mark-in-progress 1` |
| `mark-done` | Set task status to done | `task-cli mark-done 1` |
| `list` | View tasks with optional status filter | `task-cli list done` |

## 📝 Notes

- The application must be started fresh for each command execution
- Task IDs are automatically assigned and start from 1
- Descriptions must be enclosed in quotes
- Tasks are stored locally and persist between sessions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/marco0167/TaskTrackerCLI/issues).


## 👥 Authors

- **Your Name** - *Initial work* - [marco0167](https://github.com/marco0167)

## 🙏 Acknowledgments

- Node.js community
- All contributors to this project
