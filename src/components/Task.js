"use client";

import { useState } from 'react';

const Task = ({ task, onUpdate, onToggleComplete, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);  //expanded or not
  const [isEditing, setIsEditing] = useState(false);    //is task being edited
  const [title, setTitle] = useState(task.title);          //state for title
  const [description, setDescription] = useState(task.description);   //state for description

  const handleExpand = () => setIsExpanded(!isExpanded);  //toggle expanded task view

  const handleEdit = () => setIsEditing(true);  //state of editing to true

  const handleSave = () => {
    onUpdate(task.id, { title, description });   // saving task & editing state to false
    setIsEditing(false);
  };

  const handleComplete = () => onToggleComplete(task.id);   //toggle complete or incomplete

  return (
    <div className={`p-4 mb-4 rounded-md shadow-md ${task.completed ? 'bg-gray-400' : 'bg-green-300'}`}>  {/* if incomplete ->bg gray else bg green */}
      {isEditing ? (
        <div>
          <input
            className="border rounded w-full p-2 mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
          <textarea
            className="border rounded w-full p-2 mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}>
              {/* button to call handlesave*/}
            Save
          </button>
        </div>
      ) : (
        <div>{/* not editing*/}
          <h3 className="text-xl font-semibold cursor-pointer" onClick={handleExpand}>
            {task.title}
          </h3>
          {isExpanded && (
            <div className="mt-2"> {/* displayed when isexpanded is true*/}
              <p className="mb-2">{task.description}</p>
              <p className="text-gray-500 text-sm mb-4">
                Last updated: {new Date(task.timestamp).toLocaleString()}
              </p>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded mr-2"
                onClick={handleEdit}> 
                {/* edit button*/}
                Edit
              </button>
              <button
                className={`py-2 px-4 rounded ${task.completed ? 'bg-red-500' : 'bg-green-600'} text-white`}
                onClick={handleComplete}>  
                {/* toggle done or incomplet*/}
                {task.completed ? 'Mark as Incomplete' : 'Mark as Done'}
              </button>
          
              <button 
                className="bg-red-500 text-white py-2 px-4 rounded ml-2"
                onClick={()=>onDelete(task.id)}>
                  {/* delete button */}
                  Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task