import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Status Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
