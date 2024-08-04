"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Task from './Task';

const TaskList = ({ tasks, onUpdate, onToggleComplete, onDelete }) => {
  const router = useRouter();  // router obj to access query params
  const [searchQuery, setSearchQuery] = useState('');  // state for qeury

  useEffect(() => {
    setSearchQuery(router.query?.q || '');
  }, [router.query?.q]);   // useeffect to update search query from URL params

  const handleSearchChange = (e) => {
    const query = e.target.value;                //for updating qquery url
    setSearchQuery(query);                 
    router.push(`/?q=${query}`, undefined, { shallow: true });   //update url without refreshing page 
  };    

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())   // filtering task 
  );

  return (
    <div>
      <input
        type="text"
        className="border rounded w-full p-2 mb-4"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={handleSearchChange}
      />    {/* Search input field */}

{/* display filtered task */}
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />             
      ))}
    </div>
  );
};

export default TaskList;

