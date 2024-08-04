
# Todo List Application
## Overview

This is a Todo List application built using Next.js and styled with Tailwind CSS. It allows users to manage tasks with features including creating, updating, marking tasks as done and searching for tasks. It uses a  local storage for storing task data.

### System Design

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Data Storage**: local storage
- **Key Features**:
  - **Create Task**: add new tasks 
  - **Update Task**: edit existing tasks
  - **Search Tasks**: filter tasks based on a search query
  - **Expandable List**: display task details with option to expand

## Implementation

### Components

1. **`page.js`**:
   - manages the state of the todo list
   - handles adding, updating, and toggling tasks
   - uses local storage for displaying tasks across page reloads
   - renders the task list and a form for adding new tasks
2. **`TaskList.js`**:
   - displays a list of tasks
   - search functionality to filter tasks
3. **`Task.js`**:
   - Represents an individual task.
   - allows editing title and description.
   - has buttons to mark the task as complete or incomplete and to edit the task.

### File Structure

- **`src/app/page.js`**: Main page 
- **`src/components/Task.js`**: component for tasks
- **`src/components/TaskList.js`**: component displaying list of tasks
- **`src/data/tasks.json`**: dummy JSON file containing initial tasks 


## Running the Application


### Installation

1. **Clone the Repository**

   ```bash
   git clone `https://github.com/parshadk/todo_assignment`
   cd todo-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application is running at  `http://localhost:3000`.


