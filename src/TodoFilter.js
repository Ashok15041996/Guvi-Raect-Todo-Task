import React from 'react';

const TodoFilter = () => {
  return (
    <div>
      <label>Status Filter: </label>
      <select>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
