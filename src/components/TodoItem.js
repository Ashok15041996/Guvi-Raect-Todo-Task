import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name: editedName,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleChangeStatus = (status) => {
    updateTodo({
      ...todo,
      status,
    });
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>
            Status: 
            <select
              value={todo.status}
              onChange={(e) => handleChangeStatus(e.target.value)}
            >
              <option value="completed">Completed</option>
              <option value="not-completed">Not Completed</option>
            </select>
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
