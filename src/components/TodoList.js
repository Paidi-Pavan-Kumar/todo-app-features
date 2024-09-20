import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
          editTask={(newText) => editTask(index, newText)}
        />
      ))}
    </div>
  );
}

export default TodoList;
