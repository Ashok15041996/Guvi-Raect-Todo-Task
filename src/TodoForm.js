import React from 'react';

const TodoForm = () => {
  return (
    <form>
      <input type="text" placeholder="Todo Name" />
      <input type="text" placeholder="Todo Description" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
