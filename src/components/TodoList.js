import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div>
      <h2>My Todos</h2>
      <div className='responsive'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
