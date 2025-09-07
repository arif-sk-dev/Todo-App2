import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAdd = () => {
      if (title.trim() && description.trim()) {
        const newTodo = { title, description };
        setTodos([...todos, newTodo]);
        setTitle('');
        setDescription('');
      }
    };
  
    const handleDelete = (index) => {
      const updated = todos.filter((_, i) => i !== index);
      setTodos(updated);
    };
  
    const handleUpdate = (index, updatedTodo) => {
      const updated = todos.map((todo, i) => (i === index ? updatedTodo : todo));
      setTodos(updated);
    };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Todo App</h2>
      <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title Here"
      style={styles.input}
      />

      <textarea
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description Here"
      style={styles.textarea}
      />

      <button onClick={handleAdd} style={styles.button} className='button'>Add Task</button>

      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    maxWidth: '600px',
    margin: '10px auto',
    borderRadius: '8px',
    fontFamily: 'sans-serif',
    // border: '0.1px solid lightgray'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    boxSizing: 'border-Box'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    boxSizing: 'border-Box',
    fontFamily: 'sans-serif'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontSize: '16px'
  }
}

export default App;