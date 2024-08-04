"use client";

import { useState } from 'react';
import TaskList from '../components/TaskList';
import tasksData from '../data/tasks.json';

const Home = () => {
  const [taskList, setTaskList] = useState(tasksData);  //use initial dummy values
  const [newTaskTitle, setNewTaskTitle] = useState('');   //set task
  const [newTaskDescription, setNewTaskDescription] = useState('');   // set description
  const [isAddingTask, setIsAddingTask] = useState(false);      // add task state

  const handleUpdateTask = (id, updates) => {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, ...updates, timestamp: new Date().toISOString() } : task    // update task & updates time stamp
      )
    );
  };

  const handleToggleComplete = (id) => {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed, timestamp: new Date().toISOString() } : task    //clicking button updates timestamp
      )
    );
  };

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return; // Prevent adding tasks with empty titles

    const newTask = {
      id: taskList.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
      timestamp: new Date().toISOString()
    };
    setTaskList([...taskList, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setIsAddingTask(false);
  };

  const handleDeleteTask = (id) => {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      {isAddingTask ? (
        <div className="mb-4">
          <input
            className="border rounded w-full p-2 mb-2"
            type="text"
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />    
          <textarea
            className="border rounded w-full p-2 mb-2"
            placeholder="Task Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleAddTask}
          >
            Add Task
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => setIsAddingTask(false)}
          >
            Cancel
          </button>
          {/* display the above content if addingtask is true */}
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => setIsAddingTask(true)}
        >{/*display button add task button if addingtask is false */}
          Add Task
        </button>   
      )}
      <TaskList tasks={taskList} onUpdate={handleUpdateTask} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask}/>
    </div>
  );
};

export default Home;
