import React, { useState } from 'react';

function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const isOverdue = new Date(task.dueDate) < new Date() && !task.completed; // Overdue check

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span 
          onClick={toggleTask} 
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      )}

      <span style={{ color: isOverdue ? 'red' : 'black' }}>
        (Due: {task.dueDate})
      </span>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
