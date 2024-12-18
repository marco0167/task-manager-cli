# Task Manager CLI

A command-line task management application built with Node.js that helps you organize and track your daily tasks efficiently.

Project inspired by: [roadmap.sh/projects/task-tracker](https://roadmap.sh/projects/task-tracker)

## 🚀 Features

- **Task Management**
  - Create new tasks with descriptions
  - Update existing task details
  - Delete tasks by their ID
  - Mark tasks as "in-progress" or "done"

- **Task Organization**
  - View all tasks
  - Filter tasks by status (todo/in-progress/done)

## 📋 Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## ⚡ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/marco0167/task-manager-cli.git
   cd task-manager-cli
   ```

2. Run a command:
   ```bash
   node task-cli.js <command>
   ```

## 💻 Usage

### Available Commands

```bash
# View help
node task-cli.js help

# Adding a new task
node task-cli.js add "Buy groceries"

# Updating task description
node task-cli.js update 1 "Buy groceries and cook dinner"

# Deleting a task
node task-cli.js delete 1

# Changing task status
node task-cli.js mark-in-progress 1
node task-cli.js mark-done 1

# Viewing tasks
node task-cli.js list             # List all tasks
node task-cli.js list done        # List completed tasks
node task-cli.js list todo        # List pending tasks
node task-cli.js list in-progress # List tasks in progress
```

### Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `add` | Create a new task | `node task-cli.js add "Complete project documentation"` |
| `update` | Modify task description | `node task-cli.js update 1 "Update project docs"` |
| `delete` | Remove a task | `node task-cli.js delete 1` |
| `mark-in-progress` | Set task status to in progress | `node task-cli.js mark-in-progress 1` |
| `mark-done` | Set task status to done | `node task-cli.js mark-done 1` |
| `list` | View tasks with optional status filter | `node task-cli.js list done` |

## 📝 Notes

- Each command must be run as a separate CLI command
- Task IDs are automatically assigned
- Task descriptions must be enclosed in quotes
- Tasks are stored locally and persist between sessions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/marco0167/TaskTrackerCLI/issues).

## 👥 Authors

- **Marco** - *Initial work* - [marco0167](https://github.com/marco0167)

## 🙏 Acknowledgments

- Node.js community
- All contributors to this project
- [roadmap.sh](https://roadmap.sh) for the project idea
