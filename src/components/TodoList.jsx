import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          title={todo.title}
          description={todo.description}
          onDelete={() => onDelete(index)}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TodoList;