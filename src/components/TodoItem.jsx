import React, { useState } from 'react';
import './TodoItem.css'
import { RiDeleteBin6Fill  } from '@remixicon/react'

const TodoItem = ({index, title, description, onDelete, onUpdate}) => {
  const [editTitle, setEditTitle]= useState(title);
  const [editDesc, setEditDesc] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = ()=> {
    onUpdate(index, {title: editTitle, description: editDesc});
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <div style={{flex: 1}}>
          <input
            type='text'
            value={editTitle}
            onChange={(e)=> setEditTitle(e.target.value)}
            style={styles.input}
          />

          <input
            type='text'
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            style={styles.input}
          />
        </div>
      ) : (
        <div style={{ flex: 1 }}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.desc}>{description}</p>
        </div>
      )
    }
      <div style={styles.actions}>
        {isEditing ? (
          <button onClick={handleSave} style={styles.saveBtn}>✅</button>
        ) : (
          <button onClick={() => setIsEditing(true)} style={styles.editBtn}>✏️</button>
        )}
        <button className="deleteBtn" onClick={onDelete}><RiDeleteBin6Fill /></button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#2a2a2a',
    padding: '15px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    color: '#fff'
  },
  desc: {
    margin: '5px 0 0',
    fontSize: '14px',
    color: '#ccc'
  },
  input: {
    width: '95%',
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#1e1e1e',
    color: '#fff'
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  editBtn: {
    background: 'none',
    border: 'none',
    color: '#4CAF50',
    fontSize: '18px',
    cursor: 'pointer'
  },
  saveBtn: {
    background: 'none',
    border: 'none',
    color: '#00bcd4',
    fontSize: '20px',
    cursor: 'pointer'
  },
  // deleteBtn: {
  //   background: 'none',
  //   border: 'none',
  //   color: 'red',
  //   fontSize: '19px',
  //   cursor: 'pointer'
  // }
};

export default TodoItem;